const es = require('eslint-config-airbnb-base/rules/es6')

const rules = {
  ...es.rules,

  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  // enforces no braces where they can be omitted
  // http://eslint.org/docs/rules/arrow-body-style

  'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],
  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-parens

  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
  // require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members

  'no-await-in-loop': 'off',
  // Disallow await inside of loops
  // http://eslint.org/docs/rules/no-await-in-loop

  'no-confusing-arrow': 'off',
  // disallow arrow functions where they could be confused with comparisons
  // http://eslint.org/docs/rules/no-confusing-arrow

  'no-restricted-syntax': 'off',
  // disallow certain syntax forms
  // http://eslint.org/docs/rules/no-restricted-syntax
}

module.exports = {
  ...es,
  rules,
  parser: 'babel-eslint',
  parserOptions: {
    ...es.parserOptions,
    ecmaVersion: 8,
  },
}
