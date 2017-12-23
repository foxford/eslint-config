const imports = require('eslint-config-airbnb-base/rules/imports')

Object.assign(imports.rules, {
  'import/no-unresolved': 'off',
  // ensure imports point to files/modules that can be resolved
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md

  'import/prefer-default-export': 'off',
  // Require modules with a single export to use a default export
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

  'import/order': [
    'warn',
    {
      groups: [['builtin', 'external'], ['internal', 'parent'], ['sibling', 'index']],
      'newlines-between': 'always-and-inside-groups',
    },
  ],
  // Enforce a convention in module import order
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md

  'import/newline-after-import': ['warn', { count: 1 }],
  // Require a newline after the last import/require in a group
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md

  'import/no-named-as-default': 'error',
  // Prevent importing the default as if it were named
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md

  'import/extensions': [
    'error',
    'never',
    [
      'json',
      'json5',
      'less',
      'css',
      'scss',
      'sass',
      'styl',
      'jpeg',
      'jpg',
      'png',
      'svg',
      'bmp',
      'gif',
    ]
      .reduce((obj, ext) => Object.assign(obj, { [ext]: 'always' }), {}),
  ],
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
})

module.exports = imports
