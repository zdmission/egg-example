'use strict';
//  读取packae.json
const packageJSON = require('./package.json');

module.exports = {
  name: packageJSON.name,
  script: './server.js',
  instances: 1, // 启动的核数
  exec_mode: 'cluster',
  // exec_mode: 'fork',
  instance_var: 'INSTANCE_ID',
  vizion: false,
  env_test: {
    NODE_ENV: 'test',
    EGG_SERVER_ENV: 'unittest',
  },
  env_pre: {
    NODE_ENV: 'pre',
    EGG_SERVER_ENV: 'pre',
  },
  env_production: {
    NODE_ENV: 'production',
    EGG_SERVER_ENV: 'prod',
  },
  max_restarts: 10,
  min_uptime: 20000,
};
