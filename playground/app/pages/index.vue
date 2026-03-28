<template>
  <div class="space-y-4 p-7 bg-gray-200 h-dvh w-full text-center">
    <h1 class="text-4xl text-(#7B00FF)!">DevFolio</h1>

    <div class="w-2/3 mx-auto flex items-start gap-4 p-4">
      <div class="w-1/3 space-y-4">
        <ProfileCard
          name="John Chawri"
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
