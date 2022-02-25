module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-key': 0,
    'no-var': 2,
    semi: 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    quotes: [2, 'single'],
    'no-duplicate-case': 2,
    'no-dupe-args': 2,
    'no-empty': 2,
    'no-redeclare': 2,
    camelcase: 1,
  },
};
