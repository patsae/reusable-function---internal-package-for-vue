# การเตรียมโครงสร้าง Library

ในการทำ Reusable Components เราต้องการเครื่องมืออย่าง Bun.js หรือ Node.js(Node) ซึ่งเป็น JavaScript Runtime ที่ช่วยให้รันโค้ด JavaScript นอกเบราว์เซอร์ได้

# 3 เครื่องมือหลักในโปรเจกต์นี้

🚀 1. Bun.js (The Runtime & Package Manager)

- ใช้รันคำสั่งต่างๆ แทน Node.js, ใช้ติดตั้ง Library (Dependencies) ได้รวดเร็วมาก และช่วยจัดการโครงสร้างโปรเจกต์เบื้องต้นผ่าน bun init

⚙️ 2. tsconfig (The Rules)

- กำหนดว่า TypeScript ควรจะตรวจสอบ Code ของเราเข้มงวดแค่ไหน โดยเราแยกไฟล์เพื่อให้ "ตัว Component" (Source Code) และ "เครื่องมือตั้งค่า" (Tooling) มีกฎที่แยกออกจากกัน ไม่ปะปนกัน

📦 3. Vite (The Builder)

- นำไฟล์ .vue และ .ts ที่เราเขียนแยกๆ ไว้ มา Bundle (รวมร่าง) ให้กลายเป็นไฟล์เดียวในโฟลเดอร์ dist เพื่อให้คนอื่นสามารถนำ Package ไปติดตั้งใช้งานได้ง่ายๆ พร้อมทั้งสร้างไฟล์ CSS และไฟล์ Type (.d.ts) ให้เราอัตโนมัติ

# 🏋️‍♂️ Workshop

1. 🫓 เปิด Terminal ขึ้นมาในโฟลเดอร์ Project ของเราจากนั้นพิมพ์คำสั่ง

   ```
   bun init
   ```

   Bun จะทำการสร้างโครงสร้างโปรเจกต์พื้นฐานให้เรา หลังจากที่สร้างเสร็จเราจะพบไฟล์ใน Project ของเราดังนี้
   1.1 package.json: ไฟล์สำหรับเก็บข้อมูลโปรเจกต์และรายการ Library ที่เราใช้ (Dependencies)
   1.2 bun.lockb: ไฟล์ Lock ของ Bun (เป็น Binary file) ซึ่งช่วยให้การติดตั้ง Library ในครั้งต่อๆ ไปเร็วขึ้นมาก
   1.3 tsconfig.json: ไฟล์ตั้งค่า TypeScript ที่ Bun เตรียมมาให้พร้อมใช้งานทันที
   1.4 index.ts: ไฟล์เริ่มต้น (Entry point) ของโปรเจกต์

   ### ไฟล์โครงสร้าง project ที่ได้จาก bun init

   ```
   project-card
   |- node_modules/
   |-.gitignore
   |- bun.lock
   |- index.ts
   |- package.json
   |- readme.md
   |- tsconfig.json
   ```

2. 📦 ติดตั้ง Package สำหรับพัฒนา Library
   - Dependencies (Library หลักที่ Code ต้องใช้)

   ```
   bun add vue
   ```

   - DevDependencies (เครื่องมือสำหรับ Build และ Development)

   ```
   bun add -d vite @vitejs/plugin-vue @vue/tsconfig vue-tsc vite-plugin-dts vite-plugin-vue-devtools @types/bun
   ```

3. 📦 ตั้งค่า package.json

```json
{
  "name": "@devfolio/project-card", // ชื่อ Scoped Package โดย @devfolio จะต้องตรงกับชื่อ Group ใน GitLab
  "version": "0.0.0", // หมายเลขเวอร์ชันปัจจุบันของโปรเจกต์หรือแพ็กเกจ
  "private": false, // ตั้งค่าเป็น false เพื่อให้ package นี้สามารถเผยแพร่ได้
  "publishConfig": {
    // ส่วนนี้สำคัญมาก เป็นการกำหนดให้ Bun/NPM รู้ว่าถ้าจะ Publish ให้ส่งไปที่ Registry ของ GitLab ตาม URL ที่ระบุ
    "@devfolio:registry": "https://<<your-git-lab-url>>/api/v4/projects/<<project-id>>/packages/npm/"
  },
  "type": "module",
  "files": [
    "dist" // บอกว่าตอนที่คนอื่นโหลด Package นี้ไป ให้เอาไปเฉพาะโฟลเดอร์ dist (ซึ่งมีไฟล์ที่ Build แล้ว) เท่านั้น
  ],
  "main": "./dist/project-card.umd.cjs", // ชี้ไปที่ไฟล์ Bundle หลัก เพื่อให้รองรับทั้งระบบเก่า (CommonJS) และระบบใหม่ (ESM)
  "module": "./dist/project-card.js",
  "exports": {
    // กำหนดตำแหน่งของไฟล์ รวมถึงไฟล์ CSS เพื่อให้เวลาคนอื่นใช้ สามารถ Import สไตล์มาได้ง่ายๆ เช่น import '@devfolio/project-card/style.css'
    ".": {
      "types": "./dist/lib/main.d.ts",
      "import": "./dist/project-card.js",
      "require": "./dist/project-card.umd.cjs"
    },
    "./style.css": "./dist/project-card.css"
  },
  "scripts": {
    "dev": "vite",
    "build": "bun type-check && vite build",
    "build-only": "vite build",
    "type-check": "vue-tsc --build"
  },
  "dependencies": {
    "vue": "^3.5.31"
  },
  "devDependencies": {
    "@types/bun": "^1.3.11",
    "@vitejs/plugin-vue": "^6.0.5",
    "@vue/tsconfig": "^0.9.1",
    "vite": "^8.0.3",
    "vite-plugin-dts": "^4.5.4",
    "vite-plugin-vue-devtools": "^8.1.1",
    "vue-tsc": "^3.2.6"
  },
  "peerDependencies": {
    "typescript": "^5"
  }
}
```

4. 🔧 เตรียมไฟล์ tsconfig.json

4.1. tsconfig.json (The Master Controller) ไฟล์นี้ทำหน้าที่เป็น "ศูนย์กลาง" ที่คอยบอกว่าเรามี Config ย่อยอะไรบ้าง และตั้งค่าพื้นฐานที่ทุกไฟล์ต้องใช้ร่วมกัน

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.bun.json" }]
}
```

4.2. tsconfig.base.json

```json
{
  "compilerOptions": {
    // Environment setup & latest features
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
    "jsx": "preserve",
    "allowJs": true,

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    "types": ["bun", "node"],

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  }
}
```

4.3. tsconfig.app.json (The Library Core) ไฟล์นี้สำคัญที่สุด เพราะควบคุมการเช็คประเภทข้อมูล (Type Checking) ของ Source Code ทั้งหมดที่จะถูก Build ออกไปเป็น Library ให้คนอื่นใช้งาน

```json
{
  "extends": "./tsconfig.base.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "lib/**/*"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "composite": true, // สำคัญสำหรับการทำ Project References
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

4.4. tsconfig.bun.json (The Tooling Config) ไฟล์นี้มีไว้เพื่อจัดการ "เครื่องมือ" ที่เราใช้พัฒนา เช่น vite.config.ts หรือไฟล์ Test ต่างๆ ซึ่งรันบน Bun Runtime

```json
{
  "extends": "./tsconfig.base.json",
  "include": ["vite.config.*", "vitest.config.*", "cypress.config.*", "playwright.config.*", "eslint.config.*", "scripts/**/*"],
  "compilerOptions": {
    "composite": true,
    "target": "ESNext",
    "module": "Preserve",
    "moduleResolution": "bundler",

    "types": ["bun", "node"],

    "noEmit": true
  }
}
```

5. 🔧 เตรียมไฟล์ vite.config.ts

หน้าที่หลักของ Vite ในนี้ไม่ได้ใช้เพื่อรันเว็บไซต์ทั่วไป แต่เราจะใช้ใน **"Library Mode"** คือการเอาไฟล์ .vue, .ts และไฟล์ CSS ทั้งหมดที่คุณเขียน มารวมกัน(Bundle) ให้กลายเป็นไฟล์ JavaScript ชุดเดียว เพื่อให้คนอื่นสามารถ import ไปใช้งานได้

```typescript
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

      // กำหนดชื่อไฟล์ที่จะ build ให้ตรงกับ Project ของเรา
      // แนะนำใช้ PascalCase สำหรับ UMD name
      name: "ProfileCard",
      fileName: "profile-card",

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
```
