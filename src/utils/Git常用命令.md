[[toc]]

## 常用操作记录

**查看分支提交历史**
```shell
# 查看历史提交的基本信息
git log

# 查看历史提交，除基本信息外，详细的变化
git log --stat

```

**撤销本次commit，重回暂存区**
```shell
git reset --soft HEAD^
```



## 参考文献

- 官方文档：[https://git-scm.com/book/zh/v2](https://git-scm.com/book/zh/v2)