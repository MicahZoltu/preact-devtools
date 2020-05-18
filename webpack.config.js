const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");
const PreactRefreshPlugin = require("@prefresh/webpack");

module.exports = {
	entry: {
		app: "./styleguide/index.tsx",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".json"],
	},
	devtool: "#source-map",
	watch: true,
	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[name]__[local]--[hash:base64:2]",
							},
						},
					},
				],
			},
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							plugins: [
								[
									"@babel/plugin-transform-react-jsx",
									{
										pragma: "h",
										pragmaFrag: "Fragment",
									},
								],
							],
						},
					},
				],
			},
			{
				test: /\.tsx?/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							plugins: [
								[
									"babel-plugin-transform-jsx-to-htm",
									{
										tag: "$$html",
										import: {
											module: "htm/preact",
											export: "html",
										},
									},
								],
								[
									"babel-plugin-transform-rename-properties",
									{
										rename: {
											// _depth: "__b",
											// _dirty: "__d",
											// _nextState: "__s",
											// _renderCallbacks: "__h",
											// _vnode: "__v",
											// _children: "__k",
											// _dom: "__e",
											// _lastDomChild: "__z",
											// _component: "__c",
											// __html: "__html",
											// _parent: "__p",
											// _pendingError: "__E",
											// _processingException: "__p",
											// _context: "__n",
											// _defaultValue: "__p",
											// _id: "__c",
											// _parentDom: "__P",
											// _root: "__p",
											// _diff: "__b",
											// _commit: "__c",
											// _render: "__r",
											// _hook: "__h",
											// _catchError: "__e",
											// _unmount: "_e",
											// __hooks: "__H",
										},
									},
								],
							],
						},
					},
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new PreactRefreshPlugin(),
		new HtmlWebpackPlugin(),
		new ForkTsCheckerWebpackPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(
				process.env.NODE_ENV || "development",
			),
			"process.env.DEBUG": JSON.stringify(true),
		}),
	],
};
