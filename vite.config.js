import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    resolve: {
        alias: {
            // "@": path.resolve("./resources/js"),
        },
    },
    plugins: [
        react(), // React plugin that we installed for vite.js
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
});
