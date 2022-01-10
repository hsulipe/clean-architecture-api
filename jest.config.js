module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'c overage',
  coverageProvider: 'v8',
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
