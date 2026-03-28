# การพัฒนา Library

หลังจากที่ได้เตรียมโครงสร้างพื้นฐาน (Infrastructure) พร้อมแล้ว บทนี้เราจะเข้าสู่การลงมือสร้าง Source Code จริงๆ โดยเราจะเน้นไปที่การสร้าง Component จริงๆ

# 🏋️‍♂️ Workshop

สร้างโฟลเดอร์ /src ขึ้นมาภายใน project ของเรา

โครงสร้างไฟล์ในโฟลเดอร์ src

    src/components/ProjectCard.vue: Vue Components ของเรา
    src/App.vue: หน้าหลักสำหรับทดสอบ Component (เปรียบเสมือน Playground)
    src/main.ts: จุดเริ่มต้น (Entry Point) สำหรับการรัน Development Server

1. src/main.ts

```javascript
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
```

2. src/components/ProjectCard.vue

```vue
<template>
  <div class="devfolio-project-card-wrapper">
    <h3>{{ cardTitle }}</h3>

    <div class="devfolio-project-card-content" v-for="project in projectItems">
      <div class="devfolio-project-card-img-wrapper">
        <img class="devfolio-project-card-img" :src="project.image" :alt="project.title" />
      </div>

      <h2 class="devfoli-text-primary">{{ project.title }}</h2>

      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped>
h2,
h3 {
  margin: 0;
}
.devfolio-project-card-wrapper {
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.devfolio-project-card-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: thin solid #ebebeb;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 10px #c9c9c9;
  margin-top: 0.5rem;
}

.devfolio-project-card-img-wrapper {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 1rem;
}

.devfolio-project-card-img {
  object-fit: cover;
  width: 100%;
}

.devfoli-text-primary {
  color: oklch(58.5% 0.233 277.117);
  word-wrap: break-word;
}
</style>

<script setup lang="ts">
interface projectItems {
  title: string | undefined;
  image: string | undefined;
  description: string | undefined;
}

const {
  cardTitle = "Main Untitle",
  projectItems = [
    {
      title: "Untitle Project",
      image: "https://picsum.photos/1000",
      description: "",
    },
  ],
} = defineProps<{
  /** @param {string|undefined} cardTitle - ชื่อ Card Title */
  cardTitle?: string;
  /** @param {object|undefined} projectItems - Array object ของ project
   ** @param {string|undefined} projectItems.title: string | undefined; - ชื่อ Project
   ** @param {string|undefined} projectItems.image: string | undefined; - Path ของรูปภาพ Profile (เช่น /images/avatar.png)
   ** @param {string|undefined} projectItems.description: string | undefined; - คำอธิบายรายละเอียดสั้นๆ เกี่ยวกับตัวโปรเจค
   */
  projectItems?: projectItems[];
}>();
</script>
```

3. src/App.vue

```vue
<template>
  <ProjectCard
    card-title="Project"
    :project-items="[
      {
        title: 'Reusable Component for vue',
        image: 'https://picsum.photos/1000',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
      {
        title: 'Full Stack with Nuxt.js',
        image: 'https://picsum.photos/1000',
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      },
    ]"
  />
</template>

<script setup lang="ts">
import ProjectCard from "./components/ProjectCard.vue";
</script>
```

# 💻 ทดสอบ component

หลังจากที่เราเขียน Code ใน App.vue และ ProfileCard.vue เสร็จแล้ว ขั้นตอนสำคัญคือการรันระบบขึ้นมาดูหน้าตาจริงๆ (Playground) เพื่อตรวจสอบว่า Props และ CSS ทำงานถูกต้องหรือไม่

เพื่อให้ Vite สามารถรันได้ เราต้องมีไฟล์ index.html อยู่ที่ Root Project (นอกโฟลเดอร์ src) เพื่อเชื่อมไปยัง main.ts

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dev Showcase</title>
  </head>

  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

จากนั้นทดสอบ component ด้วยการรันคำสั่ง

```
bun run dev
```

จากนั้นเปิด Browser คุณควรจะเห็น Project Card แสดงขึ้นมา
