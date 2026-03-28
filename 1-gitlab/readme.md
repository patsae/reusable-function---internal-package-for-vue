# การตั้งค่าใน Gitlab

เราจะใช้ GitLab เป็นที่เก็บ **Internal Package** เพื่อให้ Library ของเราสามารถถูกเรียกใช้งานได้

## 🪟 Group Management

การสร้าง Group จะเป็นการกำหนด Scoped Packages ให้มีความเฉพาะเจาะจง Package ที่ถูก Build จะถูกเก็บไว้ในระดับ Group ทำให้โปรเจกต์อื่นๆ ภายใต้ Group เดียวกันสามารถดึงไปใช้ได้ง่าย และยังจัดการสิทธิ์ให้ Team Member เข้าถึงทุด Repository ภายใน Group ได้ในที่เดียว

# 🏋️‍♂️ Workshop

## ขั้นตอนการสร้าง Group

1. เข้าสู่หน้า Groups:

- หลังจาก Login เข้า GitLab ให้คลิกที่ปุ่ม "Plus (+)" บริเวณแถบเมนูด้านบน หรือไปที่หน้า Groups -> New group

2. เลือกประเภท Group:

- เลือก "Create group"

3. ตั้งค่ารายละเอียด (Group settings):

- Group name: ตั้งชื่อกลุ่มที่สื่อถึงองค์กรหรือโปรเจกต์หลัก
- Group URL: นี่คือส่วนสำคัญ เพราะจะถูกนำไปใช้ใน Scoped Name ของ Package (เช่น gitlab.com/my-group)
- Visibility level เลือก Private หากต้องการจำกัดสิทธิ์เฉพาะคนที่ได้รับเชิญเท่านั้น
- กดปุ่ม "Create group"

## 👫 Manage Member

1. ไปที่หน้า Group ของคุณ:

- จากแถบเมนูด้านซ้าย เลือก Manage -> Members

2. คลิกปุ่ม Invite members:

- บริเวณด้านขวาบน ให้คลิกที่ปุ่มสีฟ้า "Invite members"

3. ระบุข้อมูลสมาชิก:

- GitLab member or email: พิมพ์ชื่อ Username หรือ Email ของเพื่อนร่วมทีม
- Select a role: เลือกบทบาท (Role) ที่เหมาะสม (ดูรายละเอียดด้านล่าง)
- Access expiration date (Optional): กำหนดวันหมดอายุสิทธิ์ (ถ้าต้องการให้เข้าถึงชั่วคราว)
- กดปุ่ม "Invite"

### การเลือก Role (Permission Levels)

GitLab มีการแบ่งสิทธิ์ที่ชัดเจน เพื่อความปลอดภัยของ Source Code และ Package Registry ของเรา

| Role       | ความสามารถหลัก                                                | เหมาะสำหรับใคร                   |
| ---------- | ------------------------------------------------------------- | -------------------------------- |
| Guest      | ดูความคืบหน้า (Issue) ได้อย่างเดียว มองไม่เห็น Code           | ผู้ประสานงาน หรือ Manager        |
| Reporter   | ดู Code และ Clone โปรเจกต์ได้ แต่แก้ไขไม่ได้                  | Tester หรือผู้ที่เข้ามาอ่าน Code |
| Developer  | (แนะนำ) Push code ได้, สร้าง Branch ได้ และจัดการ Package ได้ | Software Developer ในทีม         |
| Maintainer | จัดการการตั้งค่า Project, Merge Code และจัดการสิทธิ์คนอื่นได้ | Team Lead / DevOps               |
| Owner      | มีสิทธิ์สูงสุด รวมถึงการลบ Group/Project                      | เจ้าของโปรเจกต์                  |

## 📝 สร้าง project

เมื่อเรามี Group หลักเรียบร้อยแล้ว ขั้นตอนต่อมาคือการสร้าง Project ภายใต้ Group นั้น เพื่อใช้เก็บ Source Code ของ Component

1. เข้าสู่ Group ที่สร้างไว้

- ไปที่เมนู Groups แล้วเลือก Group หลักที่สร้างไว้

2. คลิกปุ่ม New project:

- บริเวณด้านขวาบน ให้คลิกที่ "New project"

3. เลือก Create blank project:

- เนื่องจากเราจะเริ่มเขียน Component เองตั้งแต่ต้น ให้เลือก "Create blank project"

4. ตั้งค่ารายละเอียด Project

- Project name: แนะนำให้ตั้งชื่อที่สื่อสารชัดเจน เช่น ui-library หรือ profile-card
- Project URL: ตรวจสอบให้แน่ใจว่ามันอยู่ภายใต้ Group ที่เราสร้างไว้ (เช่น gitlab.com/devfolio/ui-library)
- Project slug: จะถูกเจนให้โดยอัตโนมัติตามชื่อ Project (ใช้สำหรับ URL และการอ้างอิงในอนาคต)
- Visibility Level: เลือก Private หากต้องการจำกัดสิทธิ์เฉพาะคนที่ได้รับเชิญเท่านั้น

5. Clone project ลงในเครื่องเรา
