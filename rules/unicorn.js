const unicorn = require('eslint-plugin-unicorn')

const {
  env,
  parserOptions,
  plugins,
  rules: urules,
} = unicorn.configs.recommended

const rules = {
  ...urules,

  'unicorn/import-index': 'off',
  'unicorn/filename-case': 'off',
  'unicorn/no-abusive-eslint-disable': 'off',
  'unicorn/no-fn-reference-in-iterator': 'off',
  'unicorn/catch-error-name': ['error', { name: 'error' }],
  'unicorn/explicit-length-check': 'off',
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
}

module.exports = {
  env,
  parserOptions,
  plugins,
  rules,
}
