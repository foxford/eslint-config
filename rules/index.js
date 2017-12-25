const solid = require('eslint-config-airbnb-base/rules/best-practices')

Object.assign(solid.rules, {
  'class-methods-use-this': 'warn',
  // enforce that class methods use "this"
  // http://eslint.org/docs/rules/class-methods-use-this

  'no-magic-numbers': 'off',
  // disallow magic numbers
  // http://eslint.org/docs/rules/no-magic-numbers

  'no-unused-expressions': [
    'error',
    {
      'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true,
    },
  ],
  // disallow usage of expressions in statement position
  // http://eslint.org/docs/rules/no-unused-expressions

  'standard/array-bracket-even-spacing': ['error', 'either'],
  // https://github.com/xjamundx/eslint-plugin-standard#rules-explanations

  'standard/computed-property-even-spacing': ['error', 'even'],
  // https://github.com/xjamundx/eslint-plugin-standard#rules-explanations
})

module.exports = Object.assign({}, solid, {
  env: { 'browser': true },
  plugins: ['standard'],
})
