<template>
  <SocailBadge
    :items="[
      { name: 'gitlab', link: 'https://about.gitlab.com/' },
      { name: 'Linkedin', link: 'https://www.linkedin.com/' },
    ]"
  />
</template>

<script setup lang="ts">
import SocailBadge from "./components/SocailBadge.vue";
</script>
