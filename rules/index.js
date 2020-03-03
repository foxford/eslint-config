const solid = require('eslint-config-airbnb-base/rules/best-practices')
const globalsRestricted = require('eslint-restricted-globals')

const globalsAllowed = ['history', 'location']
// Allow history due to React Router props

Object.assign(solid.rules, {
  'class-methods-use-this': 'warn',
  // enforce that class methods use "this"
  // http://eslint.org/docs/rules/class-methods-use-this

  'no-magic-numbers': 'off',
  // disallow magic numbers
  // http://eslint.org/docs/rules/no-magic-numbers

  'no-restricted-globals': ['error'].concat(globalsRestricted.filter(x => !~globalsAllowed.indexOf(x))),
  // disallow specific globals
  // http://eslint.org/docs/rules/no-restricted-globals

  'no-unused-expressions': [
    'error',
    {
      'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true,
    },
  ],
  // disallow usage of expressions in statement position
  // http://eslint.org/docs/rules/no-unused-expressions

  'radix': 'off',
  // require use of the second argument for parseInt()

  'standard/array-bracket-even-spacing': ['error', 'either'],
  // https://github.com/xjamundx/eslint-plugin-standard#rules-explanations

  'standard/computed-property-even-spacing': ['error', 'even'],
  // https://github.com/xjamundx/eslint-plugin-standard#rules-explanations
})

// eslint-disable-next-line prefer-object-spread
module.exports = Object.assign({}, solid, {
  env: { 'browser': true },
  plugins: ['standard'],
})
