module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2017: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:react/all'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-indent': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-max-depth': 0,

    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/no-var-requires': 0
  }
};
