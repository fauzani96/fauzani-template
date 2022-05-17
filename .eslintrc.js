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
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': 0,
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx', '.jsx']}],
    'no-console': ['error', {allow: ['warn', 'error']}],
    /* 'no-unused-vars': [
      'error',
      {vars: 'all', args: 'all', argsIgnorePattern: '^_'},
    ], */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 0,
    camelcase: 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
