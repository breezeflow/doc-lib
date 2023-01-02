[[toc]]

## 自定义注解

```java
import java.lang.annotation.*;
import java.util.concurrent.TimeUnit;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface DistributedLock {
    /**
     * 锁名称（前缀）
     */
    String lockName() default "";

    /**
     * 关联属性值（通常是EL表达式）
     */
    String lockValue() default "";

    /**
     * 等待时间
     */
    long waitTime() default 0L;

    /**
     * 释放锁时间（持有锁时间）
     */
    long leaseTime() default 30L;

    /**
     * 时间单位 默认秒
     */
    TimeUnit timeUnit() default TimeUnit.SECONDS;
}
```

## Spring工具类

基于`ApplicationContextAware`接口实现
```java
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class SpringContextUtils implements ApplicationContextAware {

    private static ApplicationContext applicationContext;

    public static <T> T getBean(Class<T> clazz) {
        return clazz.cast(applicationContext.getBean(clazz));
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}

```

## 切面

```java
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.breezeflow.web.base.annotation.DistributedLock;
import org.breezeflow.web.base.exception.BizException;
import org.breezeflow.web.base.util.SpringContextUtils;
import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import java.lang.reflect.Method;
import java.util.Objects;

@Slf4j
@Aspect
@Component
public class DistributedLockAop {


    /**
     * @desc 切入点
     * @Param
     */
    @Pointcut("@annotation(org.breezeflow.web.base.annotation.DistributedLock)")
    public void redisLock() {
    }

    /**
     * @param joinPoint
     * @return
     * @desc 环切
     */
    @Around("redisLock()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        //获取锁注解
        DistributedLock distributedLock = getAnnotation(joinPoint);
        //获取锁
        RLock lock = getLock(joinPoint, distributedLock);
        try {
            //加锁
            if (!tryLock(lock, distributedLock)) {
                throw new BizException();
            }
            return joinPoint.proceed();
        } finally {
            unlock(lock);
        }
    }

    /**
     * @param joinPoint
     * @return Method
     * @desc 是否存在注解，如果存在就获取
     */
    private DistributedLock getAnnotation(ProceedingJoinPoint joinPoint) {
        Method method = getAnnotationMethod(joinPoint);
        return method.getAnnotation(DistributedLock.class);
    }

    private Class getAnnotationClass(ProceedingJoinPoint joinPoint) {

        return joinPoint.getTarget().getClass();
    }

    /**
     * @param joinPoint
     * @return Method
     * @desc 是否存在注解，如果存在就获取
     */
    private Method getAnnotationMethod(ProceedingJoinPoint joinPoint) {
        Signature signature = joinPoint.getSignature();
        MethodSignature methodSignature = (MethodSignature) signature;
        return methodSignature.getMethod();
    }

    /**
     * @param joinPoint
     * @return joinPoint
     * @desc 获取锁对象
     */
    private RLock getLock(ProceedingJoinPoint joinPoint, DistributedLock distributedLock) {
        //获取锁前缀
        String lockName = distributedLock.lockName();
        if (StringUtils.isBlank(lockName)) {
            Class clazz = getAnnotationClass(joinPoint);
            Method method = getAnnotationMethod(joinPoint);
            Environment env = SpringContextUtils.getBean(Environment.class);
            String applicationName = env.getProperty("spring.application.name");
            if (StringUtils.isNotBlank(applicationName)) {
                applicationName = applicationName + ":";
            }
            lockName = applicationName + clazz.getSimpleName() + ":" + method.getName();
        }
        String lockValue = distributedLock.lockValue();
        if (StringUtils.isNotBlank(lockValue)) {
            // 扩展，可以通过el表达式获取特定参数的值，从而获取不同的锁
            // lockValue = SpelUtil.generateKeyBySpEL(distributedLock.lockValue(), joinPoint);
            lockName = lockName + "-" + lockValue;
        }
        //获取锁
        return SpringContextUtils.getBean(RedissonClient.class).getLock(lockName);
    }

    /**
     * @param rLock
     * @return boolean
     * @desc 加锁
     */
    private boolean tryLock(RLock rLock, DistributedLock distributedLock) throws Exception {

        return rLock.tryLock(distributedLock.waitTime(), distributedLock.leaseTime(), distributedLock.timeUnit());
    }

    /**
     * @param rLock
     * @return null
     * @desc 释放锁
     */
    private void unlock(RLock rLock) {
        if (Objects.isNull(rLock)) {
            return;
        }
        if (!rLock.isHeldByCurrentThread()) {
            return;
        }
        rLock.unlock();
    }

}
```

## 使用

```java
@DistributedLock(lockName = "biz", lockValue = "#dto.boxNo", waitTime = 10, leaseTime = 200)
public Result boxUnload(BizDto dto,Context context){
    
    return null;
}
```