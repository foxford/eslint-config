const config = {
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
    .map(require.resolve),
}

module.exports = config
