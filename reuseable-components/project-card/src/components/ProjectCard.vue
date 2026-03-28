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

h3 {
  font-weight: bolder;
}

.devfolio-project-card-wrapper {
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  background: #fff;
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
  background: #fff;
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
   ** @property {string|undefined} projectItems.title - ชื่อ Project
   ** @property {string|undefined} projectItems.image - Path ของรูปภาพ Profile (เช่น /images/avatar.png)
   ** @property {string|undefined} projectItems.description - คำอธิบายรายละเอียดสั้นๆ เกี่ยวกับตัวโปรเจค
   */
  projectItems?: projectItems[];
}>();
</script>
