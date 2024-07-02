const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'airbnb-base',
      require.resolve('./rules/style.js'),
      require.resolve('./rules/import.js'),
      require.resolve('./rules/typescript.js'),
      require.resolve('./rules/prettier.js'),
    ],
    rules: {
        'prefer-named-exports': 'off',

        'prefer-destructuring': 'off',
          // 'prefer-destructuring': ['warn', { object: true, array: true }],
          // ensure all object/arrays end with a comma
          'comma-dangle': ['error', 'always-multiline'],
          'class-methods-use-this': 'off',
          // consistent new lines
          'function-paren-newline': ['error', 'consistent'],
          'eol-last': ['error', 'always'],
          // allow restricted syntax like for...of loops
          'no-restricted-syntax': 'off',
          'no-await-in-loop': 'off',
          'no-console': 'error',
          // 'no-floating-promises': true,
          // do not allow process.env access in files
          'no-process-env': 'warn',
    },
    env: {
      es6: true,
      browser: true,
      node: true,
    },
  }
