const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: __dirname,
	mode: "development",
	devtool: "source-map",
	entry: "./src/index.js",
	watch: true,
	output: {
		path: path.join(__dirname, "./dist")
	},
	module: {
		rules: [
			// {6214852130554812
			// 	test: /\.js$/,
			// 	use: ["babel-loader"],
			// 	exclude: /node_modules/
			// }
			{
				test: /\.css$/i,
				use: [
					{ loader: 'style-loader' },
					// { loader: 'style-loader' },
					"css-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins: [

		// new HtmlWebpackPlugin(),
	]
};
