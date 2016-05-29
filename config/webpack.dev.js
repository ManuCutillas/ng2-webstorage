const wmerge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = wmerge(common, {
	output: {
		publicPath: '/',
		filename: 'app.js',
		chunkFilename: '[chunkhash].bundle.js'
	},
	entry: [
		'webpack/hot/dev-server',
		'./example/app'
	]
});
