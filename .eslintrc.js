module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": 0,
    'vuejs-accessibility/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-restricted-syntax': 0,
    "vuejs-accessibility/anchor-has-content": 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
      },
    },
  ],
};
