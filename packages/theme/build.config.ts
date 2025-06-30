import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  failOnWarn: false,

  rollup: {
    emitCJS: true,
    output: {
      exports: 'named',
    },
  },
});
