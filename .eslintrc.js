module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
  overrides: [
    {
      files: ['src/**/*.js', 'dist/**/*.js'],
      env: {
        browser: true,
        commonjs: false,
      },
    },
  ],
};
