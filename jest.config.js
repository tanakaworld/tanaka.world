module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?)$',
  testPathIgnorePatterns: ['<rootDir>/cypress'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
