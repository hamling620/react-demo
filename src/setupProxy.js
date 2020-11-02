const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://www.weather.com.cn/',
      changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    )
  )
}
