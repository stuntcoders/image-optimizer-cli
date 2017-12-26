const glob = require('glob');

module.exports = (path, callback) => {
	glob(path, (error, files) => {
		if (error) throw error;

		files.forEach(file => callback(file));
	});
};
