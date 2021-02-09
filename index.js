const eslintconfig = require('./eslint.config.js')

const { 'extends': ext } = eslintconfig

const config = {
  ...eslintconfig,
  'extends': ext.concat(['plugin:unicorn/recommended']),
  plugins: ['unicorn'],
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

module.exports = config
