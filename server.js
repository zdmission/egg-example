'use strict';
const pkgObj = require('./package.json');
const startCluster = require('egg-cluster').startCluster;
// const workers = require('os').cpus().length;
startCluster({
  baseDir: __dirname,
  workers: 1,
  port: 11001,
  title: pkgObj.name,
});
