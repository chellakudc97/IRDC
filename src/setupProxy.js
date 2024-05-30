const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/log',
    createProxyMiddleware({
      target: 'https://play.google.com',
      changeOrigin: true,
      pathRewrite: {
        '^/log': '/log',
      },
    })
  );
};