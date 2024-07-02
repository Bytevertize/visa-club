const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'airbnb-base',
      require.resolve('./style.js'),
      require.resolve('./import.js'),
      require.resolve('./typescript.js'),
      require.resolve('./prettier.js'),
    ],
    env: {
      es6: true,
      browser: true,
      node: true,
    },
  }