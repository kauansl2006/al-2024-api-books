const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const globals = require("globals");

const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs}", "**/*.*{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: false,
          trailingComma: "all",
          arrowParens: "always",
          semi: true,
        },
      ],
    },
  },
]);
