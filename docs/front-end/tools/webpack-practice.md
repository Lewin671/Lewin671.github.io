## 用 webpack 和 babel 插件初始化 react 项目

本文介绍从零开始介绍，不使用 `create-react-app` 脚手架，手动配置 webpack 和 babel，搭建好 react 环境。

> Webpack is one of the many javascript bundlers, and babel is called transpiler.

### setup React

创建文件夹和初始化 npm:

```bash
mkdir my-app
cd my-app
npm init
```

创建 source folder，创建 `index.html` 和 `index.js`:

```bash
mkdir src
cd src
touch index.html
touch index.js
```

开始写代码之前，我们需要安装 `react` 和 `react-dom`:

```bash
npm install react react-dom
```

添加 HTML 模板:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>
```

编写 `index.js`:

```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
```

### setup webpack

安装 webpack:

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
```

添加 webpack 配置文件 `webpack.config.js`。

定义 `entry`、`output`:

```js
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
};
```

为了将 bundle js 文件添加进 HTML 文件，我们需要使用 `html-webpack-plugin` 插件。首先，先安装该插件:

```bash
npm install html-webpack-plugin --save-dev
```

然后在配置文件中注册该插件:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};
```

### setup Babel

```bash
npm install @babel/core babel-loader --save-dev
```

注册 `babel-loader`:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};
```

> 这里我们有两个 presets。 `@babel/preset-env` 是 转换 ES2015+ 的语法，`@babel/preset-react` 是转换 react 代码。

### build and run

在 `package.json` 中定义

```js
"scripts": {
  "dev": "webpack serve",
  "build": "webpack",
  ...
}
```

### 添加其他 loader

1. Babel config for CSS files

```js
module.export = {
  ...
  "module": {
    "rules": [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      ....
    },
    ...
  },
  ...
}
```

Babel config for images

```js
module.export = {
  ...
  "module": {
    "rules": [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      ....
    },
    ...
  },
  ...
}
```
