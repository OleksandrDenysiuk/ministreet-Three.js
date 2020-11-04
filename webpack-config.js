const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app-bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	watch: true
};
