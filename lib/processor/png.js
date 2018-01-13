const { exec } = require('child_process');
const size = require('../helper/size');

module.exports = (path) => {
  return new Promise((resolve, reject) => {
    let from = size(path);

    exec(`convert ${path} -strip ${path}`, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }

      resolve([from, size(path)]);
    });
  });
};
