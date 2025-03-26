const unicorn = require('eslint-plugin-unicorn');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    unicorn: unicorn,
  },
  rules: {
    ...unicorn.configs.recommended.rules,
    ...require('../rules/unicorn').rules,
  },
};
