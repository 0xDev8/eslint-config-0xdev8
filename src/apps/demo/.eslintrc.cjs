// =======
// Uso através de extends
// =======
const dev8Config = require('@0xdev8/0xdev8-lint/legacy')
console.log('0xdev8-lint:0xdev8Config', dev8Config)

const config = {
  extends: ['@0xdev8/0xdev8-lint/legacy'],
}

// =======
// Uso através do mergeConfig
// =======
// const dev8MergeConfig = require('@0xdev8/0xdev8-lint/legacy/utils').mergeConfig
// const config = dev8MergeConfig({
//   rules: {
//     'no-console': ['error'],
//   }
// })
// console.log('0xdev8-lint:0xdev8Config', config)

module.exports = config