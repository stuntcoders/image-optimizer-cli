#!/usr/bin/env node
global.argv = require('minimist')(process.argv.slice(2));

const crawl = require('./lib/crawl');
const optimize = require('./lib/optimize');
const log = require('./lib/log')(argv.log);
const usage = require('./lib/helper/usage');

const path = argv._[0];

if (!path) {
  return usage();
}

crawl(path, file => optimize(file)
  .then(result => log(file, result))
  .catch(error => console.error(error))
);
