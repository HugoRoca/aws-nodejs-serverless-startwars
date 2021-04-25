module.exports = {
  testEnvironment: `node`,
  bail: true,
  verbose: true,
  setupFilesAfterEnv: [`jest-extended`],
  reporters: [
    `default`,
    [
      `jest-html-reporters`,
      {
        publicPath: `reports`,
        filename: `test.v2.html`,
      },
    ],
    [
      `./node_modules/jest-html-reporter`,
      {
        pageTitle: `Test API`,
        outputPath: `reports/test.v1.html`,
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: [`src/**/*service.js`, `!**/node_modules/**`, `!src/models/**`],
  coverageReporters: [`json`, `text`, `html`],
  coverageDirectory: `reports/coverage`,
  testPathIgnorePatterns: [`/node_modules/`],
  testMatch: [
    `<rootDir>/test/**/?(*.)+(spec|test).js`,
    `<rootDir>/test/**/*(*.)@(spec|test).js`,
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
