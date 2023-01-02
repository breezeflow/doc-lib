[[TOC]]

## 1. 环境说明

> node: v16.17.1
> 
> yarn: 1.22.19

## 2. GitHub准备工作

1. 添加本地的`SSH keys`到GitHub，确保可以正常`pull/push`
2. 创建一个**空仓库**，名称`blog` (可自定义)

## 3. 本地博客搭建

### 初始化
```shell
mkdir blog & cd blog
yarn init
yarn add -D vuepress
git init
vim .gitignore
```
`gitignore`文件配置
```
.DS_Store
node_modules
# 后续默认打包目录
/src/.vuepress/dist/

# Log files
logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
```

### 博客基本配置

1. 添加主目录`src`
2. 添加默认首页配置`src/index.md`
   ```markdown
   ---
   home: true
   lang: zh-CN
   heroImage: https://v1.vuepress.vuejs.org/hero.png
   actionText: 快速开始 →
   actionLink: /
   ---

   ::: slot footer
   MIT Licensed | Copyright © 2017-2022
   :::
   ```
3. 添加vuepress基本配置目录`src/.vuepress/config.js`
    ```javascript
    module.exports = {
        base: "/blog/"
    };
    ```
4. `package.json`添加启动脚本`script`
   ```json
   {
     "name": "blog",
     "version": "1.0.0",
     "main": "index.js",
     "license": "MIT",
     "devDependencies": {
       "vuepress": "^1.9.7"
     },
     "scripts": {
       "dev": "vuepress dev src",
       "build": "vuepress build src"
     }
   }
   ```
5. 运行
   ```shell
   git add .
   git commit -m "init"
   npm install
   yarn dev
   ```

6. 最终目录结构

   ![目录结构](~@img/web/blog-project.png)

### 提交到GitHub

```shell
# Github默认创建的主分区名是`main`
git branch -M main
# 注意使用SSH的方式
git remote add origin git@github.com:breezeflow/blog.git
git push -u origin main
```

## 4. GitHub配置

### `Github Actions`配置

![Github Action配置](~@img/web/github-actions.png)

**编辑自动生成的工作流文件**

```yml
name: GitHub Actions blog
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1

      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Build and Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          access_token: ${{ secrets.ACCESS_TOKEN }}
          branch: gh-pages
          folder: src/.vuepress/dist/
```

### 提交工作流文件，查看执行结果

![查看workflow](~@img/web/view-workflow.png)

>需等到初次执行成功之后，再配置GitHub Pages，否则看不到创建的用于deploy的gh-pages分支

### `GitHub Pages`配置
![Github Pages 配置](~@img/web/github-pages.png)

### 查看部署结果

![查看Pages1](~@img/web/view-pages01.png)
![查看Pages2](~@img/web/view-pages02.png)


## 5. 参考文献

- [VuePress官方文档](https://vuepress.vuejs.org/zh/guide/)
- [GitHub Pages Deploy Action](https://github.com/marketplace/actions/deploy-to-github-pages)