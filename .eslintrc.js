module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:node/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 0,
  },
};
