import { Linter } from "eslint"

/**
 * @typedef {import('eslint').Linter.LegacyConfig} EslintConfig
 * @type {EslintConfig}
 */
const dev8LintConfig: Linter.LegacyConfig = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  plugins: [
    '@stylistic/js',
    'import'
  ],
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ["error", { allow: ["warn", "error"] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': ["error", { "ignoreComments": true }],

    'semi': ["error", "never"],
    'indent-legacy': ["error", 2],
    'space-before-blocks': ["error", "always"],
    'import/order': ['error', {
      'newlines-between': 'always',
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
    }],

    '@stylistic/js/keyword-spacing': ["error", { before: true }],
    '@stylistic/js/key-spacing': ["error", { beforeColon: false }],
    '@stylistic/js/function-call-spacing': ["error", "never"],
    '@stylistic/js/brace-style': ["error", "1tbs", { allowSingleLine: false }],
    '@stylistic/js/arrow-parens': ["error", "always"],
    '@stylistic/js/block-spacing': ["error", "always"],
    '@stylistic/js/arrow-spacing': ["error", { before: true, after: true }],
    //'@stylistic/space-before-blocks': "error",
    //'@stylistic/no-trailing-spaces': ["error", { "ignoreComments": true }]

    // TODO: Usar o eslint-plugin-promise {https://www.npmjs.com/package/eslint-plugin-promise}
  }
}

export default dev8LintConfig
