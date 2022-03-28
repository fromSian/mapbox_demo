/* 
webpack.config.js webpack 的配置文件 
作用:指示webpack干哪些活(当你运行webpck指令时,会加载里面的配置)
*/
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  //webpack配置
  /* 入口起点 */
  entry: "./src/index.js",
  //输出
  output: {
    /* 输出文件名 */
    filename: "built.js",
    /* 输出路径
    __dirname 是nodejs的变量,代表当前文件的目录绝对路径
    */
    path: resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", "ts"],
    alias: {
      "@": resolve(__dirname, "../src")
    }
  },
  //loader的配置
  module: {
    rules: [
      //详细loader配置
      {   //大概从14开始，就需要插件来支持使用vue-loader，如果不安装，就改下package.json里的vue-loader版本，然后npm install
        test: /\.vue$/,
        use: ['vue-loader']
    },
    {
      test: /\.m?js/,
      type: "javascript/auto",
    },
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
      {
        //匹配哪些文件
        test: /\.css$/,
        use: [
          //use数组中loader执行顺序:从右到左,从下到上
          //创建style标签,将js中的样式资源插入进行,添加到head中生效
          "style-loader",
          //将css文件变成commonjs模块加载js中,里面内容是样式字符窜
          "css-loader",
        ],
      },
      {
        //匹配哪些文件
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          //将less文件编译成css文件
          //需要下载less-loader和less
          "less-loader",
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  //plugins(插件的配置)
  plugins: [
    /* npm i html-webpack-plugin 
    功能:默认会创建一个空的html,引入打包输出的所有资源(js/css) 
    需求:需要有结构的HTML文件

    注意:打包html文件中,不要引入这些资源,因为资源在打包的时候会自动引入
    */
    new HtmlWebpackPlugin({
      /* 复制 ' ./src/index.html'文件,自动引入(js/css)*/
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
  //模式 只能写一种
  mode: "development", //开发模式
  //mode:'production'  //发布模式
  devServer:{
    static:resolve(__dirname,'dist'),
    //开启gzip压缩
    compress:true,
    //端口
    port:1234,
    //自动打开浏览器
    open: true
  }
};
