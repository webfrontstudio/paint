// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	preset: "ts-jest",
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		"packages/**/*.{js,ts,jsx,tsx}",
		"!**/*.d.ts",
		"!**/lib/**/*",
		"!**/__tests__/**/*",
		"!**/*.test.*",
		"!**/*.stories.*",
	],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	moduleNameMapper: {
		"\\.(scss|css)$": "identity-obj-proxy",
	},
	testEnvironment: "jsdom",
	setupFilesAfterEnv: [
		"<rootDir>/config/setup-tests.ts",
	],
	verbose: true,
};
