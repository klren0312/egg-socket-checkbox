'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524900068830_8609';

  // add your config here
  config.middleware = [];
  // socket.io
  exports.io = {
    init: {wsEngine:'uws'},
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],
        packetMiddleware:[]
      }
    },
    redis: {
      host: '127.0.0.1',
      port: '6379'
    }
  }
  // redis 
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0
    }
  }
  // csrf
  config.security = {
    csrf: {
      enable: false
    }
  }
  return config;
};
