module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'script.js',
    '!node_modules/**',
    '!coverage/**'
  ],
  testMatch: ['**/test.js'],
  verbose: true
};
