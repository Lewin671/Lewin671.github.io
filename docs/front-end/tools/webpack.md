## Webpack
### Introduction

webpack is a **static module bundler** for modern Javascript applications.

To get started you only need to understand its **Core Concept**:

-   Entry
-   Output
-   Loaders
-   Plugins
-   Mode
-   Browser Compatibility

### Entry

An **entry point** indicates which module webpack should use to begin building its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on(directly and indirectly).

By default its value is `./scr/index.js`, but you can specify a different(or multiple) entry points by setting an `entry` property in the webpack configuration. For example:

**webpack.config.js**

```js
module.exports = {
    entry: "./path/to/my/entry/files.js",
};
```

### Output

The **output** property tells webpack where to emit the bundles it creates and how to name these files. It defaults to `./dist/main.js` for the main output file and to the `./dist` folder for any other generated file.

You can configure this part of the process by specifying an `output` field in your configuration:

**webpack.config.js**

```js
const path = require("path");

module.exports = {
    entry: "./path/to/my/entry/file.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "my-first-webpack.bundle.js",
    },
};
```

### Loaders

Out of box, webpack only understands Javascript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency path.

> One of webpack's specific features is the ability to import any type of module, such as `.css` file

At a high level, loaders have two properties in your webpack configuration:

1. The `test` property identifies which file or files should be transformed.
2. The `use` property indicates which loader should be used to do the transforming.

**webpack.config.js**

```js
const path = require("path");

module.exports = {
    output: {
        filename: "my-first-webpack.bundle.js",
    },
    module: {
        rules: [{ test: /\.test$/, use: "raw-loader" }],
    },
};
```

This tells webpack's compiler the following:

> Hey webpack compiler, when you come across a path that resolves to a `.txt` file inside of a `require` or `import` statement, use `raw-loader` to transform it before you add it to the bundle.

### Plugin

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

In order to use a plugin, you need to `require` it and add it to the `plugins` array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with `new` operator.

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
    module: {
        rules: [{ test: /\.txt$/, use: "raw-loader" }],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
```

In the example above, the `html-webpack-plugin` generates an HTML file for you application and automatically injects all your generated bundles into this file.

### Mode

By setting the `mode` parameter to either `development`, `production` or `none`, you can enable webpack's built-in optimizations that correspond to each environment. The default value is `production`.

```js
module.exports = {
    mode: "production",
};
```

## Browser Compatibility

Webpack supports all browsers that are ES5-compliant. Webpack needs `Promise` for `import` and `require.ensure()`. If you want to support older browser, you will need to load a polyfill before using these expressions.

### Environment

Webpack 5 runs on Node.js version 10.13.0+.
