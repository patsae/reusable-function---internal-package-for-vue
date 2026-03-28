# การสร้าง Component Playground

ในบทนี้เราจะสร้างโปรเจกต์ Nuxt 4 ขึ้นมาใหม่ เพื่อดึง Component ทั้งหมดที่เรา Publish ไว้ใน GitLab มาใช้งานจริงในหน้าจอเดียว

# 🚀 เริ่มต้นสร้างโปรเจกต์ Nuxt 4

```
bun create @nuxt/latest playground

cd playground
```

# 🌐 เชื่อมต่อกับ GitLab Registry

สร้างไฟล์ .npmrc ไว้ที่ root project (⚠️ อย่าลืม .gitignore ไฟล์นี้) เพื่อให้โปรเจกต์ Playground รู้ว่าจะไปโหลด @devfolio/... มาจากไหน เราต้องสร้างไฟล์ .npmrc ไว้ที่ Root ของโปรเจกต์นี้ด้วย (เหมือนตอนที่เรา Publish) เพื่อให้ Bun สามารถ "ดึง" (Pull) Package ลงมาได้

```
# .npmrc
# ตั้งค่า Scoped Registry ให้ชี้ไปที่ระดับ Group
# การสร้าง group token ทำเหมือนตอนสร้าง project token แต่เพียงไปทำในระดับ Group

@<<GROUP-NAME>>:registry=https://<<GIT-LAB-URL>>/api/v4/groups/<<GROUP-ID>>/-/packages/npm/
//<<GIT-LAB-URL>>/api/v4/groups/<<GROUP-ID>>/-/packages/npm/:_authToken=<<GROUP-TOKEN>>


# ตัวอย่างการระบุ Package library ที่จะใช้งาน (ต้องทำซ้ำตามจำนวนโปรเจกต์)
# ในกรณีที่คุณแยกสร้าง Component เป็นหลาย Project บน GitLab "ต้อง" ระบุ URL ของ Registry ให้ครบทุก Project ID

//<<GIT-LAB-URL>>/api/v4/projects/<<PROJECT-ID>>/packages/npm/:_authToken=<<PROJECT-TOKEN>>
//<<GIT-LAB-URL>>/api/v4/projects/<<PROJECT-ID>>/packages/npm/:_authToken=<<PROJECT-TOKEN>>
//<<GIT-LAB-URL>>/api/v4/projects/<<PROJECT-ID>>/packages/npm/:_authToken=<<PROJECT-TOKEN>>
//<<GIT-LAB-URL>>/api/v4/projects/<<PROJECT-ID>>/packages/npm/:_authToken=<<PROJECT-TOKEN>>

```

# 📦 เพิ่ม Library ใน package.json

จากนั้นทำการเพิ่ม library ของเราลงในส่วนของ dependencies ในไฟล์ package.json

```json
# package.json
{
    ...,
     "dependencies": {
        "nuxt": "^4.4.2",
        "vue": "^3.5.30",
        "vue-router": "^5.0.4",

        //เพิ่ม library ของเราเข้าไป
        "@devfolio/profile-card": "^0.0.0",
        "@devfolio/project-card": "^0.0.0",
        "@devfolio/skill-badge": "^0.0.0",
        "@devfolio/social-badge": "^0.0.0"
    }
}
```

รันคำสั่งติดตั้ง (install) package

```
bun install
```

### ✅ หากสำเร็จ

หากการติดตั้งสำเร็จให้ลองไปดู package ได้ที่ node_modules/@devfolio ภายในโฟลเดอร์จะมี component ที่เราได้ติดตั้งเอาไว้

# การนำมาใช้งานในหน้าเดียว (The Showcase Page)

ใน Nuxt 4 เราจะสร้างหน้า app.vue หรือหน้าใน pages/index.vue เพื่อรวบรวม Component ทั้งหมดมาจัด Layout ให้สวยงาม

```vue
<template>
  <div class="space-y-4 p-7 bg-gray-50 h-dvh w-full text-center">
    <h1 class="text-4xl text-(#7B00FF)!">DevFolio</h1>

    <div class="w-2/3 mx-auto rounded-xl shadow-lg bg-white flex items-start gap-4 p-4">
      <div class="w-1/3 space-y-4">
        <ProfileCard
          name="John Wick"
          position="Software Developer"
          description="A software developer designs, codes, tests, and maintains computer applications or systems to meet user needs."
          image="https://picsum.photos/id/237/400"
        />

        <SkillBadge :items="['vue', 'nuxt.js', 'php', 'javascript']" />

        <SocailBadge
          :items="[
            {
              name: 'Git Lab',
              link: 'https://about.gitlab.com/',
            },
            {
              name: 'LinkedIn',
              link: 'https://www.linkedin.com/',
            },
          ]"
        />
      </div>
      <div class="w-2/3 space-y-4 text-start">
        <ProjectCard
          card-title="Project"
          :project-items="[
            {
              title: 'Reusable Component for vue',
              image: 'https://picsum.photos/seed/picsum/400',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ullam modi, debitis consequatur vel assumenda officiis esse, libero atque nobis blanditiis voluptatem culpa excepturi, asperiores cum id dolorum. Ad.',
            },
            {
              title: 'Full Stack Nuxt.js',
              image: 'https://picsum.photos/seed/picsum/400',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ullam modi, debitis consequatur vel assumenda officiis esse, libero atque nobis blanditiis voluptatem culpa excepturi, asperiores cum id dolorum. Ad.',
            },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss";
</style>

<script setup lang="ts">
import { ProfileCard } from "@devfolio/profile-card";
import { ProjectCard } from "@devfolio/project-card";
import { SkillBadge } from "@devfolio/skill-badge";
import { SocailBadge } from "@devfolio/social-badge";
</script>
```

## ⚠️ อย่าลืม Import CSS ของแต่ละ Package มาด้วย

ในไฟล์ app/assets/css/main.css ให้ทำการ import css ของแต่ละ package ด้วย

```
@import "tailwindcss";
@import "@nuxt/ui";

# อย่าลืม Import CSS ของแต่ละ Package มาด้วย
@import "../../../node_modules/@devfolio/profile-card/dist/profile-card.css";
@import "../../../node_modules/@devfolio/project-card/dist/project-card.css";
@import "../../../node_modules/@devfolio/skill-badge/dist/skill-badge.css";
@import "../../../node_modules/@devfolio/social-badge/dist/social-badge.css";

```

ทดสอบการใช้งานด้วยการรันคำสั่ง

```
ิีืbun run dev


# Nuxt 4.4.2 (with Nitro 2.13.2, Vite 7.3.1 and Vue 3.5.31)
#  ➜ Local:    http://localhost:3000/
#  ➜ Network:  use --host to expose
```
