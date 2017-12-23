module.exports = {
  'extends': [
    './rules/index',
    './rules/strict',
    './rules/variables',
    './rules/promise',
    './rules/import',
    './rules/errors',
    './rules/style',
    './rules/node',
    './rules/ecma',
  ]
    .map(require.resolve)
    .concat(['plugin:unicorn/recommended']),
  plugins: ['unicorn'],
  parser: 'babel-eslint',
  rules: {
    'unicorn/import-index': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/catch-error-name': ['error', { name: 'error' }],
  },
}
