const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/serviceWorker.js",
    "!**/index.js",
    "!**/*.config.js",
    "!**/cypress/**",
    "!pages/_*.js"
  ],
  setupFilesAfterEnv: [],
  coveragePathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
    "<rootDir>/.next/",
    "<rootDir>/.history/"
  ]
};
