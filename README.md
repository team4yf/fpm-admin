## fpm-admin
fpm系列产品的标准管理后台

### Features
- 管理授权的应用
- 查看系统运行状态
- 重启／关闭系统
- 用户token管理

### DevTools
安装开发需要的工具
- cnpm(nodejs包管理器)
- gulp(前端打包工具)
- bower(前端js库管理器)
- http-server(轻量的httpserver服务器)

```bash
npm i -g cnpm
cnpm i -g gulp
cnpm i -g bower
cnpm i -g http-server
```

### Install
- 安装项目的依赖

```bash
cnpm install
```

#### 可选操作(可直接进行到 Run )
- 安装前端的js库

```bash
bower install
```

- 检查前端代码

```bash
gulp jshint
```

### Run
通过http-server来运行项目

```bash
http-server -c-1 -s
```

### Preview
打开浏览器
[http://localhost:8080](http://localhost:8080)
