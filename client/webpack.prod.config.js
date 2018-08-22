const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
	filename: './style.css',
});
module.exports = require('./webpack.config.js');

delete module.exports.devtool;
module.exports.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production'),
	}),
);
module.exports.plugins.push(
	new webpack.optimize.CommonsChunkPlugin({
		name: 'common',
	}),
);
module.exports.plugins.push(extractPlugin);
module.exports.module.rules.forEach((rule) => {
	delete rule.exclude;
	return rule;
});
module.exports.plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		comments: false,
		warnings: false,
	}),
);
