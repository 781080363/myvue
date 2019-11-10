const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
    mode:"development",
    entry:{
        app:"./move-webapp/main.js"
    },
    output:{
        filename:"app.bundle.js",
        path:path.resolve(__dirname,"move-webapp")
    },
    resolve:{
        extensions:[".js",".css",".vue"]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                
                loader:"style-loader!css-loader"
            },
            {
                test:/\.vue$/,
                loaders:"vue-loader"
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:"url-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}