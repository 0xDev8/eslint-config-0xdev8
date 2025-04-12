import { Linter } from 'eslint';
import dev8LintConfig from '../config.cjs';
import deepAssign from './deepAssign.cjs';

/**
 * @typedef {import('eslint').Linter.LegacyConfig} EslintConfig
 * @param {...EslintConfig} configs
 * @returns {EslintConfig}
 */
export function mergeConfig(...configs: Linter.LegacyConfig[]): Linter.LegacyConfig {
  const finalConfig: Linter.Config = {}
  deepAssign(finalConfig, dev8LintConfig, ...configs);
  return finalConfig
}