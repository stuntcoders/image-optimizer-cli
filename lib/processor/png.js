const { exec } = require('child_process');
const fs = require('fs');

module.exports = (path, stat) => {
  return new Promise((resolve, reject) => {
    exec(`convert ${path} -strip ${path}`, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }

      resolve([stat.size, fs.statSync(path).size]);
    });
  });
};
