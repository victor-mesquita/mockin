module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0,
    'import/extensions': 0
  },
  overrides: [
    {
      files: ['*.stories.@(js|jsx|ts|tsx|mdx)'],
      rules: {
        indent: 'off',
        'prettier/prettier': 'off'
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
};
