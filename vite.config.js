import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),                          // Main entry point
        showAddToCart: resolve(__dirname, "src/showAddToCart.html"),    // Correct path inside src folder
        // Add more entry points for other HTML files as needed
      },
    },
  },
});
