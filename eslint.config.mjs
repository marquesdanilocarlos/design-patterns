import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import love from "eslint-config-love";
import globals from "globals";

export default tseslint.config(
    {
        ignores: ["dist/", "node_modules/", "coverage/"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            love,
        ],
        languageOptions: {
            globals: { ...globals.node }
        },
        rules: {
            "no-console": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            quotes: ["error", "single", { allowTemplateLiterals: true }],
            semi: ["error", "never"],
        },
    }
);