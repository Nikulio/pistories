const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpackDashboard = require("webpack-dashboard/plugin");
const friendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
	context: path.join(__dirname, "/"),
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	devServer: {
		contentBase: "./public",
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
				test: /\.scss$/,
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
				test: /\.css/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(jpe?g|gif|jpg|png|svg|woff|ttf|wav|mp3)$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		}),
		new CopyWebpackPlugin([{ from: "public/img/*", to: "img" }], {}),
		new webpackDashboard(),
		new friendlyErrorsPlugin()
	]
};
