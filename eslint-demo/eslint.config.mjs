import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Specify language options and globals
    languageOptions: { globals: globals.browser },
    // ignores: ["file1.js"], // Add relative file paths to ignore
    rules: {
      semi: ["error", "always"], // Requires semicolons
      "no-unused-vars": "warn", // Warns on unused variables
      eqeqeq: ["error", "always"], // Enforces the use of === instead of ==
    },
  },
  pluginJs.configs.recommended,
];
