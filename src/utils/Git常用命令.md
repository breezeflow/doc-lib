[[toc]]

> Git GUI工具多种多样，但Git命令只有一套。

## 基础架构

![Git基础架构](~@img/utils/git-status.png)

## 工作流

![Git-flow](~@img/utils/git-flow.png)

## 日常操作

### 团队协作
```shell
# 从远程仓库拉取数据
git fetch

# 规范：功能分支、hotfix等都是从master切出来
git checkout master

# 规范：先更新，通常远程分支合本地分支一致，可直接 git pull
git pull origin master 

# 本地从master切出新分支
git checkout -b feature_xxx

# 开发业务 CRUD

# 素质三连：add commit push 
git add .
git commit -m "desc"
git push origin feature_xxx

# 合并到测试分支，让测试人员测试
git checkout test
# 规范：切完分支后，先更新
git pull origin test

git merge feature_xxx
# 如有冲突，手动解决冲突
git push origin test
```

### GitHub协作

```shell
# 本次创建仓库，git初始化仓库
git init .

# 本地提交
git add README.md
git commit -m "init"

# 修改分支名称
git branch -M main

# 添加远程分支并推送
git remote add origin git@github.com:breezeflow/doc-lib.git
git push -u origin main
```

### 其他

**查看历史**
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

**删除分支**
```shell
# 删除本地分支
git branch -d localBranchName

# 删除远程分支
git push origin --delete remoteBranchName
```

**远程分支操作**
```shell
# 查看远程分支
git remote -v

# 更改远端仓库地址
git remote set-url origin git@github.com:breezeflow/doc-lib.git
```


## 参考文献

- 官方文档：[https://git-scm.com/book/zh/v2](https://git-scm.com/book/zh/v2)