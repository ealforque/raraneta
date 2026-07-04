<script setup lang="ts">
import { ref } from 'vue'
import PageHeroIntro from '../components/PageHeroIntro.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
import { usePageMotion } from '../composables/usePageMotion'

const page = ref<HTMLElement | null>(null)

usePageMotion(page)
</script>

<template>
  <section ref="page" class="page">
    <div class="container">
      <PageHeroIntro
        eyebrow="Portfolio"
        title="Selected Projects"
        copy="A curated body of landmark towers, civic institutions, and smart infrastructure projects across diverse global contexts."
        image="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=2200&q=80"
        compact
      />
    </div>

    <div class="container portfolio-grid" data-stagger>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.portfolio-grid {
  margin-top: clamp(1.3rem, 3vw, 2.3rem);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1020px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 740px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
