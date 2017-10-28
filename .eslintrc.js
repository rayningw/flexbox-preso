module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"node": true,
		"es6": true,
		"jest": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"flowtype",
		"react"
	],
	"rules": {
		"indent": [
			"error",
			2
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"semi": [
			"error",
			"always"
		],
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs"
		],
		"quotes": [
			"error",
			"double"
		],
		"no-console": [
			"error",
			{ "allow": ["log", "info", "warn", "error"] }
		],
		"comma-dangle": [
			"error",
			"always-multiline",
		]
	}
};
