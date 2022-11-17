(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(_,o,v){"use strict";v.r(o);var l=v(13),e=Object(l.a)({},(function(){var _=this,o=_._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("p"),o("div",{staticClass:"table-of-contents"},[o("ul")]),o("p"),_._v(" "),o("h2",{attrs:{id:"基础架构"}},[_._v("基础架构")]),_._v(" "),o("p",[o("img",{attrs:{src:"/_images/mysql/mysql-architechture.jpg",alt:"mysql基础架构"}})]),_._v(" "),o("p",[_._v("MySQL大致分为两层，Server层和存储引擎层")]),_._v(" "),o("p",[_._v("Server层：")]),_._v(" "),o("ul",[o("li",[_._v("连接器：负责跟客户端建立连接、获取权限、维护和管理连接")]),_._v(" "),o("li",[_._v("查询缓存：执行过的语句及结果会以k-v的形式缓存在内存中，mysql8.0中去掉了查询缓存这块的功能，因为查询缓存失效频繁，只要有对表有更新操作，表上的所有查询缓存都会清空")]),_._v(" "),o("li",[_._v("分析器：词法分析、语法分析，检查SQL语句是否正确。")]),_._v(" "),o("li",[_._v("优化器：如果有索引决定使用哪个索引，如果有连表决定连表的顺序")]),_._v(" "),o("li",[_._v("执行器：操作引擎，返回结果")])]),_._v(" "),o("h2",{attrs:{id:"日志系统"}},[_._v("日志系统")]),_._v(" "),o("p",[_._v("重点需要了解的有三类日志："),o("code",[_._v("binlog")]),_._v("、"),o("code",[_._v("redo log")]),_._v("、"),o("code",[_._v("undo log")])]),_._v(" "),o("h3",{attrs:{id:"binlog"}},[_._v("binlog")]),_._v(" "),o("ul",[o("li",[_._v("binlog是Server层实现的，所有引擎都可以使用")]),_._v(" "),o("li",[_._v("记录变更操作，例如数据库表结构和数据的变更操作")]),_._v(" "),o("li",[_._v("属于逻辑性质的归档日志，记录的是sql语句的原始逻辑，例如某个数据从a变更为b，不同于物理数据页上数据的变更。")]),_._v(" "),o("li",[_._v("有三种模式："),o("code",[_._v("statement")]),_._v("（记录原始SQL语句）、"),o("code",[_._v("row")]),_._v("(默认，记录更前前后两条记录的内容)、"),o("code",[_._v("mixed")]),_._v("(混合模式，前两种模式混合使用)")]),_._v(" "),o("li",[_._v("常用于数据的备份和恢复")])]),_._v(" "),o("h3",{attrs:{id:"redo-log"}},[_._v("redo log")]),_._v(" "),o("ul",[o("li",[_._v("redo log是MySQL InnoDB引擎层特有的")]),_._v(" "),o("li",[_._v("属于物理性质的重做日志")]),_._v(" "),o("li",[_._v("记录的内容类似：对那个数据页中的什么记录，做了什么修改")]),_._v(" "),o("li",[_._v("当系统空闲的时候将记录更新到磁盘里，避免频繁的写磁盘")]),_._v(" "),o("li",[_._v("redo log起到了 crash-safe 功能，只要redo log持久化到磁盘了，即使意外崩溃，所做的变更也会保留。")])]),_._v(" "),o("h3",{attrs:{id:"undo-log"}},[_._v("undo log")]),_._v(" "),o("ul",[o("li",[_._v("用来支持事务的原子性，要么全部成功，要么全部失败回滚。")]),_._v(" "),o("li",[_._v("实现MVCC（多版本并发控制）的关键")])]),_._v(" "),o("h3",{attrs:{id:"一次更新操作"}},[_._v("一次更新操作")]),_._v(" "),o("p",[o("img",{attrs:{src:"/_images/mysql/mysql-log.jpg",alt:"mysql-log"}})]),_._v(" "),o("p",[o("strong",[_._v("大致流程说明")])]),_._v(" "),o("ol",[o("li",[o("p",[_._v("Server层接收到客户端的更新SQL")])]),_._v(" "),o("li",[o("p",[_._v("分析器对SQL进行词法分析、语法分析、校验SQL的正确性")])]),_._v(" "),o("li",[o("p",[_._v("优化器生成相应的执行计划，选择最优的执行计划")])]),_._v(" "),o("li",[o("p",[_._v("执行器修改数据前，会先尝试从内存中获取，如果没有则从磁盘中加载到内存中，返回给执行器")])]),_._v(" "),o("li",[o("p",[_._v("执行器获取数据后，更新数据之前，会先将待更新数据写入undo log，以便事务提交之前可以对数据进行回滚")])]),_._v(" "),o("li",[o("p",[_._v("执行器调度引擎，先在内存中更新数据，然后将变更写入redo log buffer")]),_._v(" "),o("ul",[o("li",[_._v("此时磁盘数据，还是原始值")]),_._v(" "),o("li",[_._v("redo log日志还没有持久化到磁盘，还在内存中")]),_._v(" "),o("li",[_._v("此时如果mysql崩溃，内存中做的修改会丢失，但并不会影响磁盘中的数据")])])]),_._v(" "),o("li",[o("p",[_._v("预提交事务，根据相应的策略持久化redo log buffer到磁盘，配置参数："),o("code",[_._v("innodb_flush_log_at_trx_commit")]),_._v("，设置为1")]),_._v(" "),o("ul",[o("li",[o("p",[_._v("0：提交事务，不持久化redo log；此时如果Mysql崩溃，则内存中的数据和redo log都会丢失，导致数据更新操作丢失")])]),_._v(" "),o("li",[o("p",[_._v("1：提交事务，持久化redo log；此时即使MySql崩溃，事务提交了，redo log已经持久化，系统恢复后会恢复所做修改。")])]),_._v(" "),o("li",[o("p",[_._v("2：提交事务，会将redo log放入，系统缓存，如果机器宕机，redo log依然会丢失，导致事务提交了，结果数据更新丢失了。")])]),_._v(" "),o("li",[o("p",[o("font",{attrs:{color:"red"}},[_._v("如果这个时候mysql发生了崩溃，即：写入redo log处于prepare状态，binlog还没有提交，当系统恢复时，这个事务会回滚。")])],1)])])]),_._v(" "),o("li",[o("p",[_._v("提交事务，持久化binlog到磁盘，配置参数："),o("code",[_._v("sync_binlog")]),_._v("，设置为1")]),_._v(" "),o("ul",[o("li",[o("p",[_._v("0: 默认值0，提交事务的时候，不直接持久化到磁盘，而是先放入到os cache中")])]),_._v(" "),o("li",[o("p",[_._v("1：提交事务的时候，直接持久化到磁盘")])]),_._v(" "),o("li",[o("p",[o("font",{attrs:{color:"red"}},[_._v("如果这个时候mysql发生崩溃，即：写入redo log处于prepare状态，如果binlog存在且完整，则系统恢复时自动提交事务，否则回滚事务")])],1)])])]),_._v(" "),o("li",[o("p",[_._v("完成最终的事务提交，将更新的binlog文件名称及位置写入redo log，同时redo log 写入commit标识，表示事务成功提交")])]),_._v(" "),o("li",[o("p",[_._v("后台会有个独立的IO线程将Buffer中修改的数据刷到磁盘，在事务成功提交的前提下，即使宕机，redo log也能恢复内存中修改过的数据。")])])]),_._v(" "),o("h3",{attrs:{id:"buffer-pool"}},[_._v("Buffer Pool")]),_._v(" "),o("ol",[o("li",[_._v("Buffer Pool默认是128M，可以通过参数"),o("code",[_._v("innodb_buffer_pool_size")]),_._v("设置")]),_._v(" "),o("li",[_._v("数据页是MySQL抽象出来的数据单位，数据库对应的磁盘文件中包含很多的数据页，每一页数据又放了很多行数据")]),_._v(" "),o("li",[_._v("Buffer Pool有一个和数据页对应的概念叫缓冲页，他们的默认大小都是16k")]),_._v(" "),o("li",[_._v("Buffer Pool中存放的数据就是一个一个的缓存页")]),_._v(" "),o("li",[_._v("Buffer Pool中存放的除了缓存页外，还包含一些缓存页的描述信息，例如：所属表空间，数据页编号等。")]),_._v(" "),o("li",[_._v("初始化Buffer Pool时会创建好空的缓冲页及对应的描述文件")]),_._v(" "),o("li",[_._v("有一个map用来判断数据页是否被缓存过，key:表空间号+数据页编号，value:缓存页地址")]),_._v(" "),o("li",[_._v("当有数据需要加载到Buffer Pool时，先判断是否已经被缓存过，如果已经缓存过，则直接取出对应的缓存页，否则，取一个空闲的缓存页来缓存数据页，并更新对应的描述文件。")])]),_._v(" "),o("h3",{attrs:{id:"问题"}},[_._v("问题")]),_._v(" "),o("p",[o("strong",[_._v("1. 为什么会有binlog 和 redo log两份日志？")])]),_._v(" "),o("p",[_._v("最开始MySQL自带的是MyISAM引擎，但MyISAM没有崩溃保护机制（crash-safe），只有binlog归档日志是无法实现crash-safe，所以InnoDB引擎就添加了独有的redo log来解决这个问题。")]),_._v(" "),o("p",[o("strong",[_._v("2. 为什么要在redo log中写入commit标识？")])]),_._v(" "),o("p",[_._v("为了保持redo log 和 binlog 两份日志的逻辑一致，只有只有redo log文件中最终写入了commit标识，才算最终事务提交成功。")]),_._v(" "),o("p",[o("strong",[_._v("3. 为什么redo log 要分两阶段提交？")])]),_._v(" "),o("p",[_._v("两阶段提交是指：持久化redo log；持久化binlog后更新binlog位置到redolog添加状态标识为commit。")]),_._v(" "),o("p",[_._v("如果先提交redo log，后提交binlog，当redo log写入成功后，mysql崩溃了，binlog没有写入，当进程重启后，因为redo log已经持久化，数据可以恢复，但后续如果要通过binlog 来备份数据，或者恢复数据时，就会导致这次更新丢失。")]),_._v(" "),o("p",[_._v("如果先提交binlog，后提交redo log，当binlog提交后，崩溃了，redo log没有持久化，进程重启后导致此次更新丢失。后续如果用binlog恢复数据的时候，就会导致多了一次更新操作。导致数据异常。")]),_._v(" "),o("p",[o("font",{attrs:{color:"red"}},[_._v("最终目的是为了保证主库与备库保持一致，或者恢复数据时的数据一致性")])],1),_._v(" "),o("p",[o("strong",[_._v("4. 在crash-safe过程中，MySQL怎么判断binlog的完整性？")])]),_._v(" "),o("p",[_._v("一个事务的binlog是有完整格式的，statement 格式的binlog，最后会有 COMMIT；row 格式的 binlog，最后会有一个 XID event。")]),_._v(" "),o("p",[o("strong",[_._v("5. redo log 和 binlog是怎么关联起来的？")])]),_._v(" "),o("p",[_._v("它们有一个共同的数据字段"),o("code",[_._v("XID")]),_._v("。崩溃恢复的时候，会按顺序扫描 redo log：如果碰到既有 prepare、又有 commit 的 redo log，就直接提交；如果碰到只有 parepare、而没有 commit 的 redo log，就拿着 XID 去 binlog 找对应的事务。")]),_._v(" "),o("p",[o("strong",[_._v("6. 为什么会有mixed这种binlog格式的存在场景？")])]),_._v(" "),o("p",[_._v("statement格式的binlog可能会导致主备不一致。row格式的缺点是，很占空间。比如你用一个 delete 语句删掉 10 万行数据，用 statement 的话就是一个SQL语句被记录到 binlog中，占用几十个字节的空间。但如果row格式的binlog，就要把这10万条记录都写到binlog中。这样做不仅会占用更大的空间，同时写 binlog 也要耗费 IO 资源，影响执行速度。所以，MySQL 就取了个折中方案，也就是有了 mixed 格式的 binlog。mixed 格式的意思是，MySQL 自己会判断这条 SQL 语句是否可能引起主备不一致，如果有可能，就用 row 格式，否则就用 statement 格式。实际上，现在越来越多的场景要求把 MySQL 的 binlog 格式设置成 row。")]),_._v(" "),o("p",[o("strong",[_._v("7. 为什么statement格式的binlog来同步数据或者恢复数据存在数据不一致的问题？")])]),_._v(" "),o("p",[_._v("记录的是原始的sql，有些语句的执行结果是依赖于上下文命令的，直接执行的结果很可能是错误的。假如执行的sql语句是"),o("code",[_._v("insert into t values(10,10, now());")]),_._v("binlog 在记录 event 的时候，多记了一条命令：SET TIMESTAMP=1546103491。它用 SET TIMESTAMP 命令约定了接下来的 now() 函数的返回时间。不论这个 binlog 是 1 分钟之后被备库执行，还是 3 天后用来恢复这个库的备份，这个 insert 语句插入的行，值都是固定的。")]),_._v(" "),o("h3",{attrs:{id:"主从同步"}},[_._v("主从同步")]),_._v(" "),o("p",[_._v("假设A为主库（读写），B为备库（只读）")]),_._v(" "),o("p",[o("img",{attrs:{src:"/_images/mysql/mysql-binlog-backup.jpg",alt:"mysql主从复制"}})]),_._v(" "),o("ol",[o("li",[_._v("在备库 B 上通过 change master 命令，设置主库 A 的 IP、端口、用户名、密码，以及要从哪个位置开始请求 binlog，这个位置包含文件名和日志偏移量")]),_._v(" "),o("li",[_._v("在备库 B 上执行 start slave 命令，这时候备库会启动两个线程， io_thread 和 sql_thread。")]),_._v(" "),o("li",[_._v("io_thread 负责与主库建立连接，主库 A 校验完用户名、密码后，开始按照备库 B 传过来的位置，从本地读取 binlog，发给 B")]),_._v(" "),o("li",[_._v("备库 B 拿到 binlog 后，写到本地文件，称为中转日志（relay log）")]),_._v(" "),o("li",[_._v("sql_thread 读取中转日志，解析出日志里的命令，并执行。")])]),_._v(" "),o("p",[o("strong",[_._v("主备切换的基本流程")])]),_._v(" "),o("p",[_._v("在备库上执行"),o("code",[_._v("show slave status")]),_._v("命令，结果里面会显示"),o("code",[_._v("seconds_behind_master")]),_._v("，用于表示当前备库延迟了多少秒")]),_._v(" "),o("ol",[o("li",[_._v("判断备库B现在的"),o("code",[_._v("seconds_behind_master")]),_._v("，如果小于某个值（比如 5 秒）继续下一步，否则持续重试这一步")]),_._v(" "),o("li",[_._v("把主库A改成只读状态，即把readonly设置为true")]),_._v(" "),o("li",[_._v("判断备库B的seconds_behind_master的值，直到这个值变成0为止")]),_._v(" "),o("li",[_._v("把备库B改成可读写状态，也就是把readonly设置为false")]),_._v(" "),o("li",[_._v("把业务请求切到备库 B")])]),_._v(" "),o("blockquote",[o("p",[_._v("因手动切换的原因，该流程中会出现系统不可用的时候，即：主备都是readonly")])]),_._v(" "),o("h2",{attrs:{id:"参考文献"}},[_._v("参考文献")]),_._v(" "),o("ul",[o("li",[_._v("美团数据库高可用架构的演进与设想："),o("a",{attrs:{href:"https://tech.meituan.com/2017/06/29/database-availability-architecture.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://tech.meituan.com/2014/06/30/mysql-index.html"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=e.exports}}]);