const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	stories: [
		"../packages/**/*.stories.mdx",
		"../packages/**/*.stories.@(js|jsx|ts|tsx)",
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		{
			name: "@storybook/addon-docs",
			options: {
				transcludeMarkdown: true,
			},
		},
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
	],
	features: {
		postcss: false,
	},
	webpackFinal: async (config, {configType}) => {
		const isProduction = configType === "PRODUCTION";

		if (isProduction) config.plugins.push(new MiniCssExtractPlugin());

		config.module.rules.push({
			test: /\.scss$/,
			use: [
				isProduction ? MiniCssExtractPlugin.loader : "style-loader",
				"css-loader",
				{
					loader: "sass-loader",
					options: {
						sassOptions: {
							includePaths: [
								path.resolve(__dirname, "../packages/style"),
							],
						},
					},
				},
			],
			include: [
				path.resolve(__dirname, "../packages"),
			],
		});
		return config;
	},
	typescript: {
		check: false,
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			shouldRemoveUndefinedFromOptional: true,
			propFilter: (property) => (property.parent ? !/node_modules/.test(property.parent.fileName) : true),
		}
	}
}
