# การ Publish Library ไปยัง GitLab Registry

ในการจะส่งของขึ้นไปที่ GitLab เราต้องมี **"Token"** และ **"Project ID"** ที่ถูกต้อง เพื่อให้คำสั่ง Publish รู้ว่าต้องไปที่ไหนและมีสิทธิ์เข้าถึงหรือไม่

# 🏋️‍♂️ Workshop

1. 🔃 การสร้างไฟล์ .npmrc

ไฟล์นี้ทำหน้าที่บอกเครื่องมือจัดการ Package (เช่น Bun หรือ NPM) ว่าถ้าเจอ Scope ชื่อ @devfolio ให้ไปจัดการที่ Registry ของ GitLab ของเรา

สร้างไฟล์ .npmrc ไว้ที่ root project

```
@<<project_group>>:registry=https://<<git-lab-url>>/api/v4/projects/<<project_id>>/packages/npm/
//<<git-lab-url>>/api/v4/projects/<<project_id>>/packages/npm/:_authToken=<<project_token>>
```

⚠️ข้อควรระวัง (สำคัญมาก)⚠️
เนื่องจากในไฟล์นี้จะมี token กับ project id ของเรา ดังนั้นห้ามนำไฟล์ .npmrc ที่มี Token จริงขึ้น Git เด็ดขาด! ให้สร้างไฟล์ .gitignore แล้วเพิ่มบรรทัดนี้ลงไป

```
# DO NOT FORGET TO ADD .npmrc EVERYTIME!!
.npmrc
```

ในไฟล์ .npmrc ให้แก้ไขดังนี้

> project_group คือชื่อกลุ่ม project ของเรา  
> git-lab-url คือ Gitlab URL ที่เราจะใช้เก็บ Internal Package  
> project_id คือ project id ของเรา  
> project_group คือ token สำหรับเข้าถึง project ของเรา

2. 💳 การหา Project ID:

- ไปที่หน้าแรก Group Project ของเรา ใน GitLab จะมีรายการ project ที่เราทำไว้อยู่
- มองหาไอคอน 3 จุด ด้านขวาของชื่อ Project คลิก Copy project ID: <<project_id>> แล้วนำไปใส่ในไฟล์ .npmrc

3. 🪙 การสร้าง Personal Access Token

- เข้าปที่หน้า Project ของเรา แล้วมองหาเมนู Settings > Repository > Deploy tokens
- คลิก Add token
- ตั้งชื่อ token name
- กำหนด scopes ให้เลือก
  - read_package_registry
  - write_package_registry
- คลิกปุ่ม Create deploy token
- หากสำเร็จจะปรากฏ token ขึ้นมาด้านบนของ form กรอกข้อมูล

```
Your new deploy token
This username supports access. What kind of access?
<<token>>  //ให้คัดลอก token นี้ไปใส่ใน .npmrc
Use this token as a password. Save it. This password can not be recovered.
```

⚠️ข้อควรระวัง (สำคัญมาก)⚠️

> Token จะแสดงขึ้นมาเพียงครั้งเดียวเท่านั้น!! ควรคัดลอกเก็บไว้ก่อน

4. 📦 การรันคำสั่ง Publish

เมื่อเตรียมทุกอย่างพร้อมแล้ว (ตรวจสอบ package.json ว่า Version ถูกต้อง เช่น 0.0.1) ให้รันคำสั่งนี้ใน Terminal

```
bun publish
```

# ✅ หากสำเร็จ

- ให้ไปดูที่หน้า Group Project ของเรา เลือกเมนู Deploy -> Package registry
- จะปรากฏ Package library ของเราขึ้นมาและมีสถานะเป็น Published

# เพิ่มเติม

# การปรับปรุงและอัปเดต Library (Update Workflow)

## ขั้นตอนการอัปเดต Library มี 3 Step ดังนี้

1. การ Build ใหม่ (Re-Build)

หลังจากที่คุณแก้ไข Component หรือเพิ่มไฟล์ใหม่ใน src/ เสร็จแล้ว ต้องสั่งให้ Vite รวบรวมไฟล์ใหม่เข้าสู่โฟลเดอร์ dist อีกครั้ง

```
bun run build
```

2. การเปลี่ยน Version (Versioning)

เราจะใช้มาตรฐาน Semantic Versioning (SemVer) ในการระบุความเปลี่ยนแปลง โดยปกติเราจะเริ่มที่เลขชุดสุดท้าย (Patch) สำหรับการแก้ไขเล็กน้อยหรือเพิ่มฟีเจอร์ที่ไม่กระทบของเดิม

ใช้คำสั่งของ npm เพื่อขยับ Version โดยอัตโนมัติ (⚠️ Bun ยังไม่มีคำสั่งขยับ version)

```
npm version patch   // (0.0.x) ใช้เมื่อแก้ไข Bug หรือปรับปรุงเล็กน้อย
npm version minor   // (0.x.0) ใช้เมื่อมีการเพิ่ม Feature ใหม่ (เช่น เพิ่ม Skill Badge Component)
npm version major   // (x.0.0) ใช้เมื่อมีการเปลี่ยนแปลงครั้งใหญ่ที่ทำให้ Code เดิมของคนอื่นอาจจะพัง (Breaking Changes)
```

3. การ Publish ใหม่ (Re-Publish)

เมื่อ Build เสร็จและ Version ใน package.json ถูกอัปเดตแล้ว ให้สั่งส่งขึ้น GitLab Registry อีกครั้ง

```
bun publish
```

## วิธีตรวจสอบผลลัพธ์

- กลับไปดูที่หน้า Group Project ของเรา เลือกเมนู Deploy -> Package registry
- จะเห็น Package เดิมที่มี Version ใหม่ ปรากฏขึ้นมา
