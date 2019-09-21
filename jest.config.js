module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?)$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.vue?$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{vue,ts}',
    '!src/**/*.d.ts',
    '!src/pages/debug/**/*'
  ]
};
