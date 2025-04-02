import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'public/js/bundle.js',
    format: 'iife',
    name: 'bundle'
  },
  plugins: [
    resolve({
      browser: true,
      extensions: ['.js', '.json']
    }),
    commonjs(),
    scss({
      output: './src/style.css'
    })
  ]
};