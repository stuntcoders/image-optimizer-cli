const { exec } = require('child_process');

module.exports = (path) => {
	return new Promise((resolve, reject) => {
		exec(`jpegoptim --strip-all --all-progressive -m85 ${path}`, (error, stdout) => {
			if (error) {
				reject(error);
				return;
			}

			const [, from, to, ratio] = stdout.match(/\s(\d+)\s-->\s(\d+)\s\S+\s\((\d+.\d+)%\)/) || [];

			resolve([from, to, ratio]);
		});
	});
};
