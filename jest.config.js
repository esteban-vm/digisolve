const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: { '@/(.*)$': ['<rootDir>/$1', '<rootDir>/utils/$1'] },
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  silent: true,
  snapshotSerializers: ['@emotion/jest/serializer'],
  snapshotResolver: '<rootDir>/jest.snapshot-resolver.js',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
