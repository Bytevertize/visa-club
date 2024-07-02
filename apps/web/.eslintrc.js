module.exports = {
    extends: ['@repo/eslint-config/next.js'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        "@typescript-eslint/no-unsafe-call": "off"
    },
}
