const { getJestConfig } = require("@storybook/test-runner");

module.exports = {
  // preset: "jest-playwright-preset",
  // setupFilesAfterEnv: ["expect-playwright"],

  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  // preset: "jest-playwright-preset",

  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "stories/*.jsx",
    "!**/*.stories.jsx",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/mockServiceWorker.js",
    "!coverage/**",
    "!.storybook/**",
    "!next.config.js",
    "!jest.config.js",
    "!test-runner-jest.config.js",
    "!babel.config.js"
  ],
  coverageReporters: ["text", "lcov", "text-summary", "html"],
  setupFilesAfterEnv: ["expect-playwright"],
  testEnvironmentOptions: {
    "jest-playwright": {
      // Options...
      collectCoverage: true,
      collectCoverageFrom: [
        "**/*.{js,jsx}",
        "stories/*.jsx",
        "!**/*.stories.jsx",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/mockServiceWorker.js",
        "!coverage/**",
        "!.storybook/**",
        "!next.config.js",
        "!jest.config.js",
        "!test-runner-jest.config.js",
        "!babel.config.js",

        "!jest-playwright.config.js"
      ]
    }
  }
};
