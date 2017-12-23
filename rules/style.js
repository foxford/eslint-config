const style = require('eslint-config-airbnb-base/rules/style')

const minItems = 4
const multiline = true

const objectCurly = {
  multiline, consistent: true, minProperties: 3,
}

Object.assign(style.rules, {
  'array-bracket-newline': ['error', { multiline, minItems }],
  // enforce line breaks after opening and before closing array brackets
  // http://eslint.org/docs/rules/array-bracket-newline

  'array-element-newline': ['error', { multiline, minItems }],
  // enforce line breaks between array elements
  // http://eslint.org/docs/rules/array-element-newline

  camelcase: 'off',
  // require camel case names
  // http://eslint.org/docs/rules/camelcase

  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    },
  ],
  // require trailing commas in multiline object literals
  // http://eslint.org/docs/rules/comma-dangle

  'function-paren-newline': ['error', 'multiline'],
  // enforce consistent line breaks inside function parentheses
  // https://eslint.org/docs/rules/function-paren-newline

  'multiline-ternary': ['error', 'always-multiline'],
  // require multiline ternary
  // http://eslint.org/docs/rules/multiline-ternary

  'no-bitwise': ['error', { 'allow': ['~'] }],
  // disallow use of bitwise operators
  // http://eslint.org/docs/rules/no-bitwise

  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
  // disallow multiple empty lines and only one newline at the end
  // https://eslint.org/docs/rules/no-multiple-empty-lines

  'no-mixed-operators': [
    'error',
    {
      groups: [
        ['%', '**'],
        [
          '&',
          '|',
          '^',
          '~',
          '<<',
          '>>',
          '>>>',
        ],
        [
          '==',
          '!=',
          '===',
          '!==',
          '>',
          '>=',
          '<',
          '<=',
        ],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    },
  ],
  // disallow un-paren'd mixes of different operators
  // http://eslint.org/docs/rules/no-mixed-operators

  'no-nested-ternary': 'off',
  // disallow nested ternary expressions
  // http://eslint.org/docs/rules/no-nested-ternary

  'no-plusplus': 'off',
  // disallow use of unary operators, ++ and --
  // http://eslint.org/docs/rules/no-plusplus

  'no-ternary': 'off',
  // disallow the use of ternary operators
  // http://eslint.org/docs/rules/no-ternary

  'no-underscore-dangle': 'off',
  // disallow dangling underscores in identifiers
  // http://eslint.org/docs/rules/no-underscore-dangle

  'object-curly-newline': [
    'error',
    {
      'ObjectExpression': objectCurly,
      'ObjectPattern': objectCurly,
    },
  ],
  // enforce line breaks between braces
  // http://eslint.org/docs/rules/object-curly-newline

  'object-property-newline': 'off',
  // enforce "same line" or "multiple line" on object properties.
  // http://eslint.org/docs/rules/object-property-newline

  'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true, 'arraysInObjects': true }],
  // require padding inside curly braces
  // http://eslint.org/docs/rules/object-curly-spacing

  'operator-linebreak': [
    'error',
    'after',
    {
      overrides: {
        '?': 'before',
        ':': 'before',
        '&&': 'before',
        '+': 'before',
        '||': 'before',
      },
    },
  ],
  // enforce operators to be placed before or after line breaks
  // http://eslint.org/docs/rules/operator-linebreak

  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always', prev: ['const', 'let', 'var'], next: ['expression', 'block', 'block-like'],
    },
    {
      blankLine: 'always', prev: ['*'], next: [
        'case',
        'class',
        'export',
        'function',
        'return',
        'switch',
        'try',
        'while',
      ],
    },
  ],
  // Require or disallow padding lines between statements
  // http://eslint.org/docs/rules/padding-line-between-statements

  'quote-props': ['error', 'as-needed', { 'keywords': true, 'unnecessary': false }],
  // require quotes around object literal property names
  // http://eslint.org/docs/rules/quote-props.html

  semi: ['error', 'never'],
  // require or disallow use of semicolons instead of ASI
  // http://eslint.org/docs/rules/semi
})

module.exports = style
