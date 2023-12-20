/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/dist/__tests__/",
    "<rootDir>/src/__tests__/utils/",
    "<rootDir>/dist/__tests__/utils/",
    "<rootDir>/src/__tests__ignore/",
    "<rootDir>/dist/__tests__ignore/",
  ],
};