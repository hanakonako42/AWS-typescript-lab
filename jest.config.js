module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports', // レポートを保存する場所
        filename: 'test-report.html', // レポートのファイル名
        openReport: true, // テスト後にレポートを自動的に開く
      },
    ],
  ],
  collectCoverage: true, // カバレッジ情報を収集する
  coverageDirectory: './coverage', // カバレッジレポートの保存先
  coverageReporters: ['html', 'text'], // カバレッジレポートの形式

};
