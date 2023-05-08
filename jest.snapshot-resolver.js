module.exports = {
  testPathForConsistencyCheck: 'some/example.test.js',
  resolveSnapshotPath: (testPath, snapshotExt) => testPath.replace(/\.test\.([tj]sx?)/, `.test.$1${snapshotExt}`),
  resolveTestPath: (snapshotFilePath, snapshotExt) => snapshotFilePath.replace(snapshotExt, ''),
}
