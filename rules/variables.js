const variables = require('eslint-config-airbnb-base/rules/variables')

const rules = {
  ...variables.rules,

  'no-unused-vars': [
    'warn',
    {
      vars: 'all', args: 'after-used', ignoreRestSiblings: false,
    },
  ],
  // disallow declaration of variables that are not used in the code
  // http://eslint.org/docs/rules/no-unused-vars
}

module.exports = {
  ...variables,
  rules,
}
