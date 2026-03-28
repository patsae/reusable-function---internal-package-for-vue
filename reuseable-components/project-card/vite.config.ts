import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // ใช้ tsconfig.app.json ตามโครงสร้าง Project References ที่เราตั้งไว้
    dts({
      tsconfigPath: "./tsconfig.app.json",
      cleanVueFileName: true,
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      // ใน Bun สามารถใช้ import.meta.dir แทนการใช้ fileURLToPath ได้เลย สะอาดกว่ามาก
      "@": resolve(process.cwd(), "./src"),
    },
  },
  build: {
    // การตั้งค่าสำหรับการ Build Library
    lib: {
      // ใช้ import.meta.dir เพื่ออ้างอิง path ปัจจุบันตามมาตรฐาน Bun/ESM
      entry: resolve(process.cwd(), "lib/main.ts"),
      name: "ProjectCard", // แนะนำใช้ PascalCase สำหรับ UMD name
      fileName: "project-card",
      formats: ["es", "umd"], // ระบุ Format ที่ต้องการชัดเจน
    },
    rollupOptions: {
      // แก้ไขจาก rolldownOptions เป็น rollupOptions (Vite ปัจจุบันยังใช้ Rollup เป็นหลัก)
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
