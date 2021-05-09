import { rollup } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const bundle = await rollup({
  input: "input.js",
  plugins: [nodeResolve(), commonjs({})],
});

await bundle.write({ file: `output.mjs` });
