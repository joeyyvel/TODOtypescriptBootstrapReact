import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

//====================================================
//import babelPlugin from "@haixing_hu/vite-plugin-babel";

// import babelPlugin from "@haixing_hu/vite-plugin-babel";

// export default {
//   plugins: [
//     // ...
//     babelPlugin(),
//   ],
// };

//=====================================================
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// const babelPlugins = [];

// if (process.env.MIGHTYMELD) {
//   babelPlugins.push("mightymeld/babel-plugin-mightymeld");
// }

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: babelPlugins,
//       },
//     }),
//   ],
// });

//===========================================================

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import mdx from "@mdx-js/rollup";

// export default defineConfig({
//   plugins: [
//     { enforce: "pre", ...mdx() },
//     react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
//   ],
// });
