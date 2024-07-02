module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types rule
    'react/react-in-jsx-scope': 'off', // Disable react-in-jsx-scope rule
    // Add any additional custom rules here
  }
};
