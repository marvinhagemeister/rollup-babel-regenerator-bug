import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "iife",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
  ],
};
