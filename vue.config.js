// module.exports = {
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     '/api':{
//       target:'https://www.imooc.com',
//       changeOrigin:false
//     }
//   }
// }
// changeOrigin 路径设置位原点
// pathRewrite 将后面的地址接在target的地址上

module.exports = {
  devServer: {
    host:'localhost',
    port:8080,
    proxy:{
      './api':{
        target:'https://wwww.imooc.com',
        changeOrigin:false,
        pathRewrite:{
          '/api':''
        }
      }
    },
 
  // clientLogLevel: 'debug'   //none | error | warning | info(info默认)
  clientLogLevel: 'info'
 
 
  }
 }
// module.exports = {
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     '/api':{
//       target:'http://www.imooc.com',
//       changeOrigin:false,
//       pathRewrite:{
//                   '/api':''
//                 }
//     }
//   }
// }
 