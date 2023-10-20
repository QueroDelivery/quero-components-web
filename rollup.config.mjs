import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

import packageJson from './package.json' assert { type: 'json' };

const styledComponentsTransformer = createStyledComponentsTransformer.default();

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        interop: 'compat',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        interop: 'compat',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**.test.{tsx,ts}', 'setupTests.ts'],
        transformers: [
          () => ({
            before: [styledComponentsTransformer],
          }),
        ],
      }),
      postcss({ extract: true }),
      terser(),
      visualizer({
        hideDeps: true,
        limit: 0,
        summaryOnly: true,
      }),
    ],
    external: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome',
      'date-fns',
      'date-fns/locale/pt-BR',
      'react-datepicker',
      'react-input-mask',
      'semantic-ui-css',
      'semantic-ui-react',
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/],
  },
  {
    input: 'dist/esm/index.css',
    output: [{ file: 'dist/index.css' }],
    plugins: [postcss({ extract: true })],
  },
];
