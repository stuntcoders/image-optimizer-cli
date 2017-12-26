#!/usr/bin/env node
global.argv = require('minimist')(process.argv.slice(2));

const crawl = require('./crawl');
const optimize = require('./optimize');
const log = require('./log')(argv.log);

crawl(argv.path, file => optimize(file)
  .then(result => log(file, result))
  .catch(error => console.error(error))
);
