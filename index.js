module.exports = {
  'extends': [
    './rules/strict',
    './rules/variables',
    './rules/promise',
    './rules/import',
    './rules/errors',
    './rules/ecma',
    './rules/style',
    './rules/index',
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
    'unicorn/explicit-length-check': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
  },
}
