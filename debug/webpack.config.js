const path = require("path");
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
			// {
			// 	test: /\.js$/,
			// 	use: ["babel-loader"],
			// 	exclude: /node_modules/
			// }

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
	}
};
