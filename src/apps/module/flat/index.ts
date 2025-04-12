import { ESLint } from "eslint";
import { commonConfig } from "./configs/common.js";

const flat0xDev8Config: ESLint.Plugin = {
  meta: {
    name: "0xdev8",
  },
  configs: {
    common: commonConfig,
    recommended: commonConfig
  }
}

export default flat0xDev8Config