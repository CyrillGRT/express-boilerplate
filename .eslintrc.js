module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
    camelcase: 0,
    'no-underscore-dangle': 0,
  },
};
