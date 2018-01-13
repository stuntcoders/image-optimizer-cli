const jpg = require('./processor/jpg');
const png = require('./processor/png');

const optimizers = {
	jpeg: jpg,
	jpg: jpg,
  png: png,
  gif: png
};

module.exports = (path) => {
	const extension = path.split('.').pop();

	if (!optimizers.hasOwnProperty(extension)) {
		Promise.reject('Invalid file extension');
	}

	return optimizers[extension](path);
};
