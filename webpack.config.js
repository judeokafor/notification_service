const path = require('path');
const dotenv = require('dotenv');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');

const currentYear = new Date().getFullYear();

module.exports = env => {
	const isDevMode = env.ENVIRONMENT === 'development';
	let envPath = isDevMode ? `${__dirname}/.env.${env.ENVIRONMENT}` : `/.env`;

	// Set the path parameter in the dotenv config
	const fileEnv = dotenv.config({ path: envPath }).parsed;

	// reduce it to a nice object, the same as before (but with the variables from the file)
	let envKeys = {};

	if (fileEnv) {
		envKeys = Object.keys(fileEnv).reduce((prev, next) => {
			// eslint-disable-next-line no-param-reassign
			prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
			return prev;
		}, {});
	}

	return {
		target: 'node',
		entry: `./src/index.ts`,
		output: {
			filename: 'index.js',
			libraryTarget: 'commonjs',
			path: path.resolve(__dirname, './dist'),
		},
		externals: [nodeExternals()],
		mode: 'none',
		module: {
			rules: [
				{
					exclude: /node_modules/,
					test: /\.ts$/,
					use: ['ts-loader'],
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new webpack.DefinePlugin(envKeys),
			new MomentTimezoneDataPlugin({
				matchZones: /^Africa/,
				startYear: currentYear - 5,
				endYear: currentYear + 5,
			}),
		],
		resolve: {
			extensions: ['.ts', '.js', 'd.ts', '.json'],
		},
		stats: 'errors-only',
	};
};
