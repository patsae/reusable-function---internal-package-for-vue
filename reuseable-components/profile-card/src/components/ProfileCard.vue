<template>
  <div class="devfolio-profile-card">
    <img class="devfolio-profile-image" :src="props.image" />
    <h2>{{ props.name }}</h2>
    <h3 class="devfoli-text-primary">{{ props.position }}</h3>

    <div class="mt-description">
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
h2,
h3 {
  margin: 0px;
}

.devfolio-profile-card {
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
}

.devfolio-profile-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  width: fit-content;
  border-radius: 50%;
  margin: auto;
}

.devfoli-text-primary {
  color: oklch(58.5% 0.233 277.117);
  word-wrap: break-word;
}

.devfoli-profile-descrition {
  word-wrap: break-word;
}
</style>

<script setup lang="ts">
interface Props {
  image?: string;
  name?: string;
  position?: string;
  description?: string;
}

/**
 * Profile card Properties
 * @param {string|undefined} image - Path ของรูปภาพ Profile (เช่น /images/avatar.png)
 * @param {string|undefined} name - ชื่อ-นามสกุล ของเจ้าของโปรไฟล์
 * @param {string|undefined} position - ตำแหน่งงานปัจจุบัน
 * @param {string|undefined} description - คำอธิบายรายละเอียดสั้นๆ เกี่ยวกับตัวบุคคล
 */
const props = withDefaults(defineProps<Props>(), {
  image: "https://picsum.photos/200",
  name: undefined,
  position: undefined,
  description: undefined,
});
</script>
