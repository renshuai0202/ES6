# ES6
《ES6标准入门》第二版

## 什么是Babel
Babel是一个用于将ES6+代码转换为ES5兼容代码的工具。它可以将新的JavaScript构造转换为ES5语法，并将其转换为ES5代码，以便在更旧的浏览器中运行。

## 使用Babel将ES6代码转换为ES5代码的步骤：

1. 安装Babel:

在命令行中执行下面的命令安装Babel：

```
npm install @babel/core @babel/cli @babel/preset-env --save-dev
```

2. 创建Babel配置文件：

在项目根目录下创建一个名为 `.babelrc`的文件，用来配置Babel的转换规则。

```
{
  "presets": ["@babel/preset-env"]
}
```

这里采用了“@babel/preset-env”预设，它根据你的目标环境自动决定要转换的JavaScript语言特性。这样可以使Babel处理更少的代码并且转换得更快。

3. 运行Babel：

现在可以运行Babel来转换JavaScript代码。

在命令行中输入以下命令：

```
npx babel src --out-dir lib
```

这条命令会将src目录下的所有js文件转换为ES5语法，并将转换后的代码输出到lib目录下。 

其中，”--out-dir lib”表示将转换后的代码输出到lib目录中。

4. 转换完成：

现在你已经将ES6代码成功转换为ES5代码了，可以在浏览器中运行它了。