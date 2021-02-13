module.exports = {
  env: {
    node: true,
    es2017: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: [2, 'single'],
  },
  ecmafeatures: {
    globalreturn: false
  }
}
