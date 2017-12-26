const jpegoptim = require('./processor/jpegoptim');

const optimizers = {
	jpeg: jpegoptim,
	jpg: jpegoptim
};

module.exports = (path) => {
	const extension = path.split('.').pop();

	if (!optimizers.hasOwnProperty(extension)) {
		Promise.reject('Invalid file extension');
	}

	return optimizers[extension](path);
};
