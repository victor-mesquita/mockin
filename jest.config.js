module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transformIgnorePatterns: ['/node_modules/(?!(@storybook/.*\\.vue$))'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**']
};
