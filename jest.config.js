module.exports = {
  testPathIgnorePatterns: ['/node_modules', '/.next/', '/cypress/', '/data/'],
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTests.ts',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/components/$1',
    '^@styles/(.*)': '<rootDir>/styles/$1',
  }
};