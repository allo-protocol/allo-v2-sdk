/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/src/__tests__/utils/",
    "<rootDir>/dist/__tests__/utils/",
    "<rootDir>/src/__tests__/Allo",
    "<rootDir>/dist/__tests__/Allo",
    "<rootDir>/src/__tests__/Registry",
    "<rootDir>/dist/__tests__/Registry",
    "<rootDir>/src/__tests__/Strategy",
    "<rootDir>/dist/__tests__/Strategy",
  ],
};