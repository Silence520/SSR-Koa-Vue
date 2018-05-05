const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const glob = require("glob");
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve, join, basename } = require("path");
// const htmlAfterWebpackPlugin = require('./config/htmlAfterWebpackPlugin.js');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const files = glob.sync("./src/webapp/views/**/*.entry.js");
const _mode = argv.mode|| 'development';
let _mergeConfig = "";
if(argv.env == 'server'){
_mergeConfig = require(`./config/webpack.server.js`);
}else{
_mergeConfig = require(`./config/webpack.${_mode}.js`);
}
const _modeflag = (_mode == 'production' ? true : false);


const { VueLoaderPlugin } = require('vue-loader')

// let _entry = {};
let _plugins=[
    new VueLoaderPlugin()
];
// for (let item of files) {
//     item.replace(/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g, (mactch, $1) => { _entry[$1] = item });
// }
let webpackConfig = {
    module: {
        rules: [{
                        test: /\.(png|jpg|gif)$/,
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name:_modeflag ? "images/[name].[hash:5].[ext]":"images/[name].[ext]"
                            }  
                          }]
            },{
                  test: /\.js$/,
                   loader: 'babel-loader'
            },{
                  test: /\.vue$/,
                  loader: 'vue-loader',
                  options:{
                    // extractCSS:true,
                  }
            },{
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                   'css-loader'  
                ]
      }]
    },
    watch: !_modeflag,
    watchOptions:{
        ignored:/node_modules/,
        aggregateTimeout:300,
        poll:1
    },
    optimization: {
        
    },
    output: {
        path: join(__dirname, './dist/assets'),
        publicPath: "/",
        filename: "scripts/[name].bundle.js"
    },
    plugins: [
       ..._plugins,
    ],
    resolve: {
        modules: [
            resolve(__dirname, 'node_modules'), // 使用绝对路径指定 node_modules，不做过多查询
        ],
        // 删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作
        extensions: [".js", ".css",'.vue'],
       
    }
};
module.exports = merge(webpackConfig, _mergeConfig);
