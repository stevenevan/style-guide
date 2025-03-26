import eslintPluginUnicorn from 'eslint-plugin-unicorn';
module.exports = {
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  extends: [require.resolve('./rules/unicorn.js')],
};
