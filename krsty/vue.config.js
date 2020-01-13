module.exports = {
    publicPath: '/',
    // outputDir: "dist",
    assetsDir: "./assets",
    lintOnSave: false,
    productionSourceMap: false,
    filenameHashing: true, //关闭文件名哈希,
    pages: {
        home: {
            entry: "src/pages/Home/main.js",
            template: "public/index.html",
            filename: "home.html",
            title: "Home",
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        }
    },
    devServer: {
        open: false,
        host: "10.1.1.56",
        port: 90,
        https: false
    }
}