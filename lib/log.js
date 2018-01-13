const fs = require('fs');

const _formatLine = (file, result) => {
  const [from, to] = result;

	return JSON.stringify({
		date: new Date().toString(),
		file: file,
		from: from,
		to: to,
	}) + '\n';
}

module.exports = (path) => {
	return (file, result) => {
		fs.appendFile(path, _formatLine(file, result), (error) => {
			if (error) throw error;
		});
	}
}
