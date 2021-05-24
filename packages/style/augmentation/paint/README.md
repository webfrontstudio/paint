# Styling Paint Components

Paint uses a public API for SCSS module overrides so your styles can be included at build time. To opt into styling Paint, you must write overrides in an augmentation folder.

## Writing Overrides

Copy the `augmentation` folder to your Webfront Studio Canvas and add SCSS shadowing the existing SCSS modules for the component you wish to override.

**`augmentation\paint\button.scss`**

```scss
@use "@webfrontstudio/paint-styles/palette" as palette;


@mixin button {
	&.secondary {
		border-color: map.get(palette.$strawberry, 500);
	}
}
```

## Changing the Include Path in Webpack

To include your augmentation to the styles at build time, you must instruct the SCSS Webpack loader to use your augmentation as one of the include paths.

**`webpack.config.js`**

```js
const path = require("path");


const rootDir = path.resolve(__dirname, "../");

module.exports = {
	// Existing Webpack configuration [...]
	module: {
		rules: [
			test: /\.scss$/,
			use: [
				"style-loader", // Make sure to use a CSS extractor in production ;)
				"css-loader",
				{
					loader: "sass-loader",
					options: {
						sassOptions: {
							includePaths: [
								// This path should point to a folder that has the custom `augmentation` folder
								__dirname,
								// Fallback to the default, empty augmentation files
								require.resolve("@webfrontstudio/paint-style"),
							],
						},
					},
				},
			],
			include: [
				path.resolve(__dirname, "src"),
			],
		],
	},
}
```
