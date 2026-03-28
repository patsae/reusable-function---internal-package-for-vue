# 🚀 Reusable Function & Internal Package For Vue

วัตถุประสงค์เพื่อพัฒนาศักยภาพ โดยมุ่งเน้นการสร้าง Reusable Function และส่วนประกอบที่นำกลับมาใช้ซ้ำได้อย่างมีประสิทธิภาพเพื่อลดความซ้ำซ้อน  
ในการทำงานตลอดจนสามารถจัดทำและบริหารจัดการ Internal Package ให้เป็นมาตรฐานเดียวกัน

| สารบัญ                                | Link                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1.การตั้งค่าใน Git Lab                | [Link](https://github.com/patsae/reusable-function---internal-package-for-vue/tree/main/1-gitlab)                    |
| 2.การเตรียมโครงสร้าง Library          | [Link](https://github.com/patsae/reusable-function---internal-package-for-vue/tree/main/2-prepare-library-structure) |
| 3.การพัฒนา Library                    | [Link](https://github.com/patsae/reusable-function---internal-package-for-vue/tree/main/3-development)               |
| 4.การ Build Library เพื่อเตรียมส่งออก | [Link](https://github.com/patsae/reusable-function---internal-package-for-vue/tree/main/4-build-library)             |
| 5.การ Publish Library ไปยัง GitLab    | [Link](https://github.com/patsae/reusable-function---internal-package-for-vue/tree/main/5-publish)                   |
| 6.playground                          | [Link](https://github.com/patsae/reusable-function---internal-package-for-vue/tree/main/6-playground)                |

# สรุปภาพรวมของ Course Reusable Function & Internal Package For Vue

## 📋 บทสรุปการสร้าง Internal Package ด้วย Bun & Vue

การสร้าง Library ที่มีมาตรฐานเดียวกัน เริ่มต้นจากการวางรากฐานที่ดีไปจนถึงการนำไปใช้งานจริง:

1. การจัดการบน GitLab (Infrastructure)

- Group & Project: เน้นการจัดกลุ่ม (Group) เพื่อคุมสิทธิ์ (Permissions) และใช้ Package Registry ร่วมกันในทีม
- Access Control: การกำหนดสิทธิ์ระดับ Developer สำหรับผู้สร้าง และ Reporter สำหรับผู้ใช้งาน รวมถึงการใช้ Access Token เพื่อความปลอดภัย

2. การเตรียมโครงสร้างด้วย Bun.js (Modern Tooling)

- Bun.js: ใช้เป็น Runtime และ Package Manager เพื่อความรวดเร็วในการติดตั้งและพัฒนา
- Modular TSConfig: แยกการเช็ค Type ระหว่างโค้ด Library (src/) และโค้ดเครื่องมือ (vite.config.ts) เพื่อความแม่นยำและ Build ที่สะอาด
- Vite Library Mode: หัวใจของการ Bundle ไฟล์ .vue และ .ts ให้กลายเป็นไฟล์เดียวในโฟลเดอร์ dist พร้อมรองรับ ESM และ UMD

3. การพัฒนาและการ Build (Development & Bundling)

- Reusable Components: พัฒนา Component (เช่น Profile Card) โดยใช้ Vue 3 และ TypeScript เพื่อความยืดหยุ่นผ่าน Props
- Entry Point: การสร้าง src/lib/main.ts เพื่อรวบรวม Component ทั้งหมดและส่งออก (Export) ไปยังภายนอก
- Build Process: ใช้ bun run build เพื่อให้ได้โฟลเดอร์ dist ที่พร้อมใช้งาน

4. การบริหารจัดการ Version และการ Publish

- Versioning: แม้ใช้ Bun แต่ยังคงใช้มาตรฐาน npm version patch เพื่อขยับเวอร์ชันใน package.json อย่างเป็นระบบ
- Registry Config: การใช้ไฟล์ .npmrc เพื่อเชื่อมต่อ Local Machine เข้ากับ GitLab Registry ทั้งในระดับ Group และ Project
- Continuous Update: วงจรการแก้ไข -> Build -> Update Version -> Publish เพื่อให้ Library ทันสมัยอยู่เสมอ

## 🛠️ การสร้าง Playground (The Integration)

ขั้นตอนสุดท้ายคือการพิสูจน์ว่า Library ที่เราสร้างมานั้นใช้งานได้จริง:

1. Project Setup: สร้างโปรเจกต์ Nuxt 4 หรือ Vue ใหม่เพื่อเป็นพื้นที่ทดสอบ
2. Configuration: คัดลอกไฟล์ .npmrc มาไว้ในโปรเจกต์นี้ เพื่อให้สิทธิ์ในการ bun add แพ็กเกจจาก GitLab Registry ขององค์กร
3. Consumption: ติดตั้งและ Import Component มาใช้งานร่วมกันในหน้าเดียว เพื่อดูความเข้ากันได้ (Compatibility) และการแสดงผล (Visual Consistency)
