(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{274:function(t,s,a){t.exports=a.p+"assets/img/thread-status.24dcb67d.jpg"},298:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul")]),s("p"),t._v(" "),s("h2",{attrs:{id:"线程池"}},[t._v("线程池")]),t._v(" "),s("h3",{attrs:{id:"线程状态"}},[t._v("线程状态")]),t._v(" "),s("ul",[s("li",[t._v("NEW：创建一个线程，还没有调用start方法")]),t._v(" "),s("li",[t._v("RUNNABLE：调用对了线程的start方法，进入ready（就绪）状态，等待别线程调度选中，获取CPU使用权，当获取CPU使用权后编程running（运行中）")]),t._v(" "),s("li",[t._v("BLOCKED：线程在获取资源锁时被阻塞")]),t._v(" "),s("li",[t._v("WAITING：该状态的线程，需要等待其他线程唤醒或中断")]),t._v(" "),s("li",[t._v("TIME_WAITING：指定时间后自行返回")]),t._v(" "),s("li",[t._v("TERMINATED：线程终止")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(274),alt:"线程状态"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Thread.sleep(millis)")]),t._v("不会释放当前线程占有的锁，无法从外部唤醒、只能超时自动恢复")]),t._v(" "),s("li",[s("code",[t._v("Thread.join()/Thread.join(millis)")]),t._v("\n当前线程调用其他线程t的join方法，进入WAITING/TIMED_WAITING状态，当前线程不会释放已持有的对象锁，其他线程执行结束或者"),s("code",[t._v("millis")]),t._v("\n时间到，进入RUNNABLE状态，也有可能进入BLOCKED状态，因为join基于wait实现")]),t._v(" "),s("li",[s("code",[t._v("Thread.yield()")]),t._v("当前线程调用此方法，放弃CPU时间片，但不释放所资源，实际中无法保证使用此方法做到线程让步，因为可能存在被CPU的线程调度再次选中")]),t._v(" "),s("li",[s("code",[t._v("Object.wait()/Object.wait(millis)")]),t._v("会释放当前线程占有的对象锁，使当前线程进入等待队列，调用"),s("code",[t._v("Object.notify()/notifyAll()")]),t._v("\n或者到时间了会被唤醒，如果能立刻获取到锁，则继续执行，否则进入同步队列（blocked）等待获取锁资源")]),t._v(" "),s("li",[s("code",[t._v("LockSupport.park()/LockSupport.parkNanos()/LockSupport.parkUntil")]),t._v("\n只负责阻塞当前线程，不释放当前线程占有的锁资源，需要另一个线程执行unpark()来唤醒，一定会继续执行后续内容")])]),t._v(" "),s("h3",{attrs:{id:"线程池的核心参数"}},[t._v("线程池的核心参数")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" availableProcessors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("availableProcessors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),t._v(" executorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("availableProcessors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECONDS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedBlockingQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("线程池的核心参数：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("corePoolSize")]),t._v(": 核心线程数，保留在线程池中的线程数，即使是空闲状态。除非设置了"),s("code",[t._v("allowCoreThreadTimeOut")])]),t._v(" "),s("li",[s("code",[t._v("maximumPoolSize")]),t._v(": 最大线程数，线程池中允许存在的最大线程数量")]),t._v(" "),s("li",[s("code",[t._v("keepAliveTime")]),t._v(": 当线程池中的线程数大于"),s("code",[t._v("corePoolSize")]),t._v("时，多余的空闲线程等待任务的最大超时时间")]),t._v(" "),s("li",[s("code",[t._v("unit")]),t._v(": "),s("code",[t._v("keepAliveTime")]),t._v("参数的单位")]),t._v(" "),s("li",[s("code",[t._v("workQueue")]),t._v(": 队列，存储尚未执行的任务")]),t._v(" "),s("li",[s("code",[t._v("ThreadFactory")]),t._v(": 线程工厂，用于创建线程")]),t._v(" "),s("li",[s("code",[t._v("RejectedExecutionHandler")]),t._v(": 拒绝策略，当线程数量和任务队列达到边界条件被阻塞时的拒绝策略")])]),t._v(" "),s("p",[s("strong",[t._v("线程池拒绝策略")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("AbortPolicy ，默认的拒绝策略，抛出一个异常")]),t._v(" "),s("li",[t._v("CallerRunsPolicy，如果线程池没有关闭，就由提交任务的当前线程处理。")]),t._v(" "),s("li",[t._v("DiscardPolicy，丢弃策略")]),t._v(" "),s("li",[t._v("DiscardOldestPolicy，丢弃最老任务，如果线程池未关闭，就弹出队列头部的元素")])]),t._v(" "),s("h3",{attrs:{id:"线程池的工作流程"}},[t._v("线程池的工作流程")]),t._v(" "),s("ol",[s("li",[t._v("当线程数n小于corePoolSize时，创建新的线程执行任务")]),t._v(" "),s("li",[t._v("当线程数n大于corePoolSize且小于maximumPoolSize时：\n"),s("ul",[s("li",[t._v("如果任务队列没满，则任务添加到队列中，等待执行")]),t._v(" "),s("li",[t._v("如果任务队列满，则创建线程执行任务")])])]),t._v(" "),s("li",[t._v("如果线程数n等于maximumPoolSize时，再有任务到达时，执行拒绝策略")])]),t._v(" "),s("h3",{attrs:{id:"线程池参数的配置"}},[t._v("线程池参数的配置")]),t._v(" "),s("p",[t._v("一般按照多线程执行任务的类型可以分为"),s("code",[t._v("CPU密集型")]),t._v("和"),s("code",[t._v("I/O密集型")])]),t._v(" "),s("p",[s("strong",[t._v("CPU密集型")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("这种任务消耗的主要是 CPU 资源，可以将线程数设置为 N（CPU 核心数）+1，\n比 CPU 核心数多出来的一个线程是为了防止线程偶发的缺页中断，或者其它原因导致的任务暂停而带来的影响。\n一旦任务暂停，CPU 就会处于空闲状态，而在这种情况下多出来的一个线程就可以充分利用 CPU 的空闲时间。")])]),t._v(" "),s("p",[s("strong",[t._v("IO密集型")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("这种任务运行会导致系统会用大部分的时间来处理 I/O 交互，而线程在处理 I/O 的时间段内不会占用 CPU 来处理，\n这时就可以将 CPU 交出给其它线程使用。\n因此在 I/O 密集型任务的应用中，我们可以多配置一些线程，具体的计算方法是 2N。")])]),t._v(" "),s("p",[s("strong",[t._v("日常情况")])]),t._v(" "),s("p",[t._v("在日常的应用场景中，通常遇不到这两种极端情况，可以参考一下公式并且通过压力测试不断尝试从而获取到一个最适合的线程数配置：")]),t._v(" "),s("p",[s("code",[t._v("线程数 = N(CPU核心数) * (1 + WT(线程等待时间) / ST(线程运行时间)")])]),t._v(" "),s("h3",{attrs:{id:"参考文献"}},[t._v("参考文献")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java线程池实现原理及其在美团业务中的实践"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);