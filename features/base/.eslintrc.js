/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ['@repo/eslint-config/feature/index.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
}
