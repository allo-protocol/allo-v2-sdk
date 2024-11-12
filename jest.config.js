/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/artifacts",
    "<rootDir>/dist",
    "<rootDir>/docs",
    "<rootDir>/src",
    "<rootDir>/node_modules",
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
};
