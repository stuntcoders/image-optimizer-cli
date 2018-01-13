const fs = require('fs');

module.exports = (path) => {
  const stats = fs.statSync(path);

  return stats.size;
};
