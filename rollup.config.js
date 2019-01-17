import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: {
		file: 'build/index.js',
		format: 'esm',
		sourcemap: true
	},
	plugins: [
    resolve(),
    babel()
	]
};
