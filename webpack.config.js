const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path")

module.exports = {
	// output: {
	// 	publicPath: "/"
	// },
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /(\.css$)/,
				include: /node_modules/,
				loaders: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		}),
		new CopyWebpackPlugin(
			[
				{ from: "public/favicon.ico", to: "./" },
				{ from: "public/img/", to: "./img" }
			],
			{}
		)
	]
};
