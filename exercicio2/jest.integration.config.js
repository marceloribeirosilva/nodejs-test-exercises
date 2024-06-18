export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests/integration'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }  
};
