import pluginJs from "@eslint/js";
import html from "@html-eslint/eslint-plugin";
import compat from "eslint-plugin-compat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tsEslint from "typescript-eslint";
import htmlScriptTag from "eslint-plugin-html";

export default [
  { files: ["**/*.{js,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.strict,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  compat.configs["flat/recommended"],
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    plugins: { html: htmlScriptTag, "@html-eslint": html },
    rules: {
      "@html-eslint/attrs-newline": 0,
      "@html-eslint/no-multiple-h1": 0,
      "@html-eslint/indent": 0,
      "@html-eslint/no-extra-spacing-attrs": 0,
      "@html-eslint/require-closing-tags": 0,
      "@html-eslint/use-baseline": "warn",
    },
  },

  {
    settings: { react: { version: "18" } },
    rules: {
      "prettier/prettier": "warn",
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-namespace": "off",
      "react/jsx-key": "off",
    },
  },
];
