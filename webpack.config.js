const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './src/index.js',
	mode: isProd ? 'production' : 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:9000/dist/',
	},
	devServer: {
		port: 9000,
		compress: true,
		proxy: {
			'*': 'http://localhost:3000',
		},
	},
	optimization: {
		minimize: true,
	},
	module: {
		rules:
			[
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.s?css$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(gif|png|jpe?g|svg)$/i,
					use: ['file-loader', 'image-webpack-loader'],
				},
			],
	},
	resolve: {
		extensions: ['*', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/src/assets/index.html'),
			filename: 'index.html',
			inject: 'body',
		}),
	],
};
