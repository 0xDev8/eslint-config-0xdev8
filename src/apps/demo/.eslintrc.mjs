import { defineConfig } from "eslint/config";
import globals from "globals";
import dev8Config from "@0xdev8/eslint-config-0xdev8/flat"

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { '0xdev8': dev8Config }, extends: ["0xdev8/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node } },
])