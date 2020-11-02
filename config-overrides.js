const { override, addDecoratorsLegacy, addWebpackAlias, useEslintRc } = require('customize-cra')
const path = require('path')

module.exports = override(
  addDecoratorsLegacy(),
  useEslintRc(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)
