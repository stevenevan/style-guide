const eslintPluginUnicorn = require('eslint-plugin-unicorn');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    ...eslintPluginUnicorn.configs.recommended,
    ...require('../rules/unicorn').rules,
  },
};
