<template>
  <div class="devfolio-skill-badge-wrapper" :style="{ flexDirection: orientation === 'horizontal' ? 'row' : 'column' }">
    <div class="devfolio-skill-badge" v-for="(item, index) in items" :key="index" :style="{ backgroundColor: colorPalette[index % colorPalette.length] }">{{ item }}</div>
  </div>
</template>

<style scoped>
.devfolio-skill-badge-wrapper {
  display: flex;
  gap: 0.5rem;
}
.devfolio-skill-badge {
  width: fit-content;
  font-size: smaller;
  color: #fff;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>

<script setup lang="ts">
/**
 * **Devfolio Skill Badge Component**
 * * ส่วนประกอบสำหรับแสดงรายการทักษะ (Skills) หรือป้ายกำกับ (Badges)
 * โดยมีการสุ่มสีพื้นหลังจาก Palette อัตโนมัติ และปรับทิศทางการวางแนวได้
 * * @example
 * <SkillBadge :items="['Vue', 'Bun']" orientation="horizontal" />
 */

const colorPalette = ["#1e6091", "#E07A5F", "#3D405B", "#81B29A", "#F2CC8F"];

const { orientation = "horizontal", items = [] } = defineProps<{
  /** * รูปแบบการจัดเรียงของ Badge
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /** * รายการชื่อทักษะหรือความสามารถ (Skill set)
   * @example ['Vue.js', 'Bun', 'TypeScript']
   */
  items?: string[];
}>();
</script>
