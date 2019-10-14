import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import external from 'rollup-plugin-peer-deps-external';

export default {
  input: 'index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {})
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
      minimize: true,
      sourceMap: true
    }),
    url(),
    svgr({
      svgoConfig: {
        plugins: {
          removeViewBox: false
        }
      }
    }),
    typescript({
      typescript: require('typescript'),
      rollupCommonJSResolveHack: true,
      clean: true,
      exclude: ["node_modules", "./src/**/*.stories.tsx"]
    }),
    terser(),
    commonjs()
  ]
};
