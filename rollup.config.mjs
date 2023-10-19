import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';

import packageJson from './package.json';

const babelRuntimeVersion = packageJson.devDependencies[
  '@babel/runtime'
].replace(/[^0-9]*/, '');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**.test.{tsx,ts}', 'setupTests.ts'],
      }),
      terser(),
      postcss({
        extract: true,
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: /node_modules/,
        plugins: [
          'babel-plugin-styled-components',
          ['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }],
        ],
      }),
      visualizer({
        hideDeps: true,
        limit: 0,
        summaryOnly: true,
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.css$/, /\.scss$/],
  },
];
