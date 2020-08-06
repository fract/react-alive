module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
}
