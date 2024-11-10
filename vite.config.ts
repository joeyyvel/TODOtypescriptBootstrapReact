// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

//=====================================================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const babelPlugins = [];

if (process.env.MIGHTYMELD) {
  babelPlugins.push("mightymeld/babel-plugin-mightymeld");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: babelPlugins,
      },
    }),
  ],
});
