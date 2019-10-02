const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  verbose: true,
  coveragePathIgnorePatterns: ["/node_modules/"],
  // setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/cypress/"]
};
