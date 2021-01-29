const path = require('path')

module.exports = {
  resolve: {
    extensions: [".json", ".js"],
    modules: ["node_modules"],
    alias: {
      'helpers': path.resolve(__dirname, './src/helpers'),
      'define': path.resolve(__dirname, './src/define'),
      'specs': path.resolve(__dirname, './src/specs')
    }
  }
}
