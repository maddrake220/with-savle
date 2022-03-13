// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["simple-import-sort"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:security/recommended",
    "next",
  ],
  rules: {
    "no-console": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unicorn/filename-case": "off",
    "prettier/prettier": "error",
    "sonarjs/cognitive-complexity": ["error", 30],
    "sonarjs/no-duplicate-string": ["error", 5],
  },
};
