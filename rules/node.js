const node = require('eslint-config-airbnb-base/rules/node')

node.rules['node/no-unsupported-features'] = 'off'

module.exports = Object.assign({}, node, {
  plugins: ['node'],
  'extends': ['plugin:node/recommended'],
  env: {
    commonjs: true,
  },
})
