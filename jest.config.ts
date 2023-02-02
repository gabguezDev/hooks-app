import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom" || "jsdom" || "node",
	// roots: ["<rootDir>/src"],
	// the following line is needed in order to grab modules from the
	// src folder without the need to write them relatively
	moduleDirectories: ["node_modules", "src"],
	verbose: true,
	transform: {
		"^.+\\.ts?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	transformIgnorePatterns: ["node_modules/(?!react-markdown/)"],
	setupFilesAfterEnv: ["./jest.setup.ts"],
};
export default config;
