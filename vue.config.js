// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  devServer: {
      proxy: {
          '/api': {
              target:"http://localhost:4000",
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  }
  
}
// .env.development
VUE_APP_BASE_API='/api'