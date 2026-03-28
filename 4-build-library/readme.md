# การ Build Library เพื่อเตรียมส่งออก (Bundling)

เมื่อเราพัฒนาและทดสอบ Component จนพอใจแล้ว ขั้นตอนต่อไปคือ การ Build เพื่อให้คนอื่นในทีม (หรือโปรเจกต์ Nuxt อื่นๆ) สามารถดึงไปใช้งานได้เสมือนเป็น Library ตัวหนึ่ง

# 🏋️‍♂️ Workshop

1. ให้สร้างไฟล์ lib/main.ts ไว้ที่ root project โดยหน้าที่ของไฟล์นี้เปรียบเสมือน **"ประตูทางออก"** ให้กับ Library ของเราก่อนครับ ปกติแล้วเวลาคนอื่น import ของจาก Package เรา

```javascript
import ProjectCard from "@/components/ProjectCard.vue";

export { ProjectCard };
```

2. การรันคำสั่ง Build ด้วย Bun เมื่อเตรียมไฟล์ Export เสร็จแล้ว ให้กลับมาที่ Terminal และใช้คำสั่ง

```javascript
bun run build
```

## สิ่งที่เกิดขึ้นเบื้องหลังคำสั่งนี้:

- Type Check: ระบบจะรัน vue-tsc (ตามที่เราเขียนไว้ใน package.json) เพื่อตรวจสอบว่าไม่มี Error ใน TypeScript
- Bundling: Vite จะนำไฟล์จาก src/lib/main.ts ไปปั่นรวมกับ Component ต่างๆ
- Minification: Code จะถูกทำให้เล็กลงและรีดประสิทธิภาพสูงสุด

3. ตรวจสอบผลลัพธ์ในโฟลเดอร์ dist

หลังจากรันคำสั่งเสร็จ คุณจะพบโฟลเดอร์ใหม่ชื่อ dist/ เกิดขึ้นที่ Root Project ภายในจะมีไฟล์สำคัญดังนี้:

- project-card.js: ไฟล์ Library ในรูปแบบ ESM (Modern JavaScript)
- project-card.umd.cjs: ไฟล์ Library รูปแบบ Universal (รองรับระบบเก่า)
- project-card.css: ไฟล์สไตล์ทั้งหมดของ Component ที่ถูกมัดรวมมาให้แล้ว
- lib/main.d.ts: ไฟล์นิยามประเภทข้อมูล (Type Definitions) ที่ทำให้เพื่อนร่วมทีมเห็น Auto-complete เวลาใช้งาน

# ⚠️ ข้อควรระวังก่อนไปต่อ ⚠️

- ตรวจสอบว่าชื่อไฟล์ใน dist ตรงกับที่ระบุไว้ใน package.json ส่วนของ main, module, และ exports หรือไม่ (ถ้าไม่ตรง โปรเจกต์ที่นำไปใช้จะหาไฟล์ไม่เจอครับ)
- หากมีการแก้ไข CSS อย่าลืมเช็คไฟล์ project-card.css ว่ามี Class ที่เราต้องการครบถ้วนหรือไม่
