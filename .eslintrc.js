module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.eslintrc.js", "!.prettierrc.js"],
  extends: ["eslint:recommended"],
  rules: {
    "no-console": "off",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],

        "prettier/prettier": [
          "error",
          { endOfLine: "auto", singleQuote: false, semi: true },
          { usePrettierrc: true },
        ],
        "react-hooks/exhaustive-deps": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "react/display-name": "off",
        "jsx-a11y/no-onchange": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
      },
    },
  ],
};
