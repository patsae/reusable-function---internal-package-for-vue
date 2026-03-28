<template>
  <div class="devfolio-Social-badge-wrapper" :style="{ flexDirection: orientation === 'horizontal' ? 'row' : 'column' }">
    <div class="devfolio-Social-badge" v-for="(item, index) in items" :key="index" :style="{ backgroundColor: colorPalette[index % colorPalette.length] }">
      <a class="devfolio-link" :href="item.link" :title="item.name" target="_blank">{{ item.name }}</a>
    </div>
  </div>
</template>

<style scoped>
.devfolio-Social-badge-wrapper {
  display: flex;
  gap: 0.5rem;
}
.devfolio-Social-badge {
  width: fit-content;
  font-size: smaller;
  color: #fff;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.devfolio-link {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
</style>

<script setup lang="ts">
/**
 * **Devfolio Social Badge Component**
 * * ส่วนประกอบสำหรับแสดงรายการ Socials
 * โดยมีการสุ่มสีพื้นหลังจาก Palette อัตโนมัติ และปรับทิศทางการวางแนวได้
 * * @example
 * <SocialBadge :items="[{name:'gitlab', link: 'https://about.gitlab.com/'}]" orientation="horizontal" />
 */

interface social {
  name: string;
  link: string;
}

const colorPalette = ["#9b5de5", "#f15bb5", "#fee440", "#ee964b", "#0d3b66"];

const { orientation = "horizontal", items = [] } = defineProps<{
  /** * รูปแบบการจัดเรียงของ Badge
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /** * รายการชื่อ Social ที่ใช่ติดต่อ
   * @example [{
   *    name: 'gitlab',
   *    link: 'https://about.gitlab.com/'
   * }]
   */
  items?: social[];
}>();
</script>
