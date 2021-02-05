const webpack = require("../lib/index.js"); // 直接使用源码中的webpack函数
const config = require("./webpack.config");
const compiler = webpack(config);
compiler.run((err, stats) => {
	if (err) {
		console.error(err);
	} else {
		console.log(stats);
	}
});

//***** debug/webpack.config.js *****
const path = require("path");
module.exports = {
	watch: true,
	context: __dirname,
	mode: "development",
	devtool: "source-map",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "./dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			}
		]
	}
};
