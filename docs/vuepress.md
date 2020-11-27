# vuepress
 - 该网站基于使用vuepress搭建，这篇blog将对搭建vuepress项目中比较繁琐的功能做一个简单的记录，以便日后参考。
## 1. SEO
 - 目前未对seo功能进行优化
## 2. 自动化部署
### 1.  将blog自动化部署到github的步骤
1. 在项目根目录下创建一个deploy.sh文件，文件内容
    ```
    #!/usr/bin/env sh

    # 确保脚本抛出遇到的错误
    set -e

    # 生成静态文件
    npm run docs:build

    # 进入生成的文件夹
    cd docs/.vuepress/dist

    # 如果是发布到自定义域名
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'

    # 如果发布到 https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

    # 如果发布到 https://<USERNAME>.github.io/<REPO>
    git push -f git@github.com:zhangliangfantasy/blog.git master:gh-pages

    cd -
    ```
1. 在github上配置ssh来管理github账户
1. 在package.json文件中添加启动命令
![avatar](assets/img/package.png)
1. 终端执行`npm run deploy`即可自动打包并部署到github上去
## 3. vssue评论
 - 该项目使用vssue做评论的功能，下面是使用vssue的注意事项
 1. 首先需要在github上创建OAuth Apps
    1. 点击头像下拉框 -> settings -> Developer settings -> OAuth APPs
    1. ![avatar](assets/img/vssue.png)
    1. 生成Client ID 和 Client secrets
    1. 配置源地址
    1. 在config中配置好插件
    1. ![avatar](assets/img/vssueconfig.png) 
 1. 注意： 在安装vssue插件时选择v4版本，否则会报跨域的错。。。。
 1. 将vssue配置成全局及防止评论共享的方案
    1. ![avatar](assets/img/vssueglobal.png) 
    1. Layout.vue中代码，如图
    ![avatar](assets/img/vssuelayout1.png) 
    ![avatar](assets/img/vssuelayout2.png) 
    ![avatar](assets/img/vssuelayout3.png) 

