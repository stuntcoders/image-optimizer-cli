const glob = require('glob');
const fs = require('fs');

module.exports = (path, callback) => {
  glob(path, (error, files) => {
    if (error) throw error;

    files.forEach((file) => {
      const stat = fs.statSync(file);

      callback(file, stat);
    });
  });
};
