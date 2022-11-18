[[toc]]

## 基础SQL




## 常用命令
```shell
# 查看是否开启binlog
show VARIABLES like "%log_bin%";

# 查看binlog的格式
show GLOBAL VARIABLES like "%binlog_format%";

# 查看当前正在写入的binlog文件
show master status;

# 获取binlog文件列表
show binary logs;

# 查看指定binlog文件内容
show binlog events in 'binlog.000002';

# 创建用户并授权
CREATE USER canal IDENTIFIED BY 'canal';
GRANT ALL PRIVILEGES ON *.* TO 'canal'@'%' ;  
FLUSH PRIVILEGES; 

# 查询事务的隔离级别
show variables like "%transaction_isolation%";

# 查看是否开启慢SQL日志
show variables like "%slow_query_log%";
# 开启慢SQL日志，一般如果不是为了调优不建议开启该参数
set slow_query_log=1

# 查询索引列表
show index from table_name;

# 查询DDL
show create table table_name;

```

## 常用函数

```shell
# CONVERT
select CONVERT(100 / 3, DECIMAL(10, 2));

```

### 日期函数

```shell
# 上个月最后一天
select last_day(date_sub(now(), interval 1 month));

# 上个月1号
select date_add(curdate() - day(curdate()) + 1, interval -1 month);

# 当前时间 距离 上个月最后一天 有多少天
select DATEDIFF(now(),last_day(date_sub(now(), interval 1 month)));

# 日期格式
select DATE_FORMAT(now(), '%Y-%m-%d %H-%m-%s');
```


