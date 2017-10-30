
# Blog  试试从0开始写一个博客。
![image](https://github.com/LengYXin/Blog/blob/master/docs/img/api.png)

## 目录结构
```
    
    ├── package.json                依赖安装配置的启动命令
    ├── webApi                      node express Api
    │   ├── src                     代码目录
    │   ├── build                   编译目录
    │   ├── views                   pug 视图
    │   ├── package.json            所需依赖和编译开发命令
    │   ├── tsconfig.json           TS配置
    │   ├── webpack.config.js       webpack 配置
    ├── webAdmin                    react Admin
    │   ├── src                     代码目录
    │   ├── package.json            所需依赖和编译开发命令
    │   ├── tsconfig.json           TS配置
    │   ├── webpack.config.js       webpack 配置
    ├── docs
    │   ├── index.html
    │   └── static
    │       ├── css
    │       └── js
```
## 安装依赖 以及启动命令
```
    /package.json
        npm run init-dev             安装全局&本地依赖
        npm run init-dev-g           安装全局依赖
        npm run init-api             安装Api依赖
        npm run init-admin           安装Admin依赖
        npm start                    启动 全部服务
        npm run start:admin          启动Admin
        npm run start:api            启动Api
    
    /webApi/package.json
        npm start                    启动Api
        npm run watch                启动node服务和编译监控自动重启服务
        npm run watch-ts             编译TS文件

    /webAdmin/package.json
        npm start                    启动Admin
        npm run build                编译打包TS
```