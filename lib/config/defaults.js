var ignoreRoot = require('ignore-by-default').directories();

// default options for config.options
const defaults = {
  restartable: false,
  colours: true,
  ignoreRoot: ignoreRoot.map((_) => `**/${_}/**`),
  watch: ['*.*'],
  stdin: true,
  runOnChangeOnly: false,
  verbose: false,
  signal: 'SIGUSR2',
  // 'stdout' refers to the default behaviour of a required nodemon's child,
  // but also includes stderr. If this is false, data is still dispatched via
  // nodemon.on('stdout/stderr')
  stdout: true,
  watchOptions: {},
};

const nodeOptions = process.env.NODE_OPTIONS || ''; // ?

if (/--(loader|import)\b/.test(nodeOptions)) {
  delete defaults.execMap.ts;
}

module.exports = defaults;
