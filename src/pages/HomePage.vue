<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
import { usePageMotion } from '../composables/usePageMotion'

const page = ref<HTMLElement | null>(null)
const featuredProjects = projects.slice(0, 3)

usePageMotion(page)
</script>

<template>
  <section ref="page">
    <HeroSection />

    <div class="page">
      <section class="container reveal">
        <p class="eyebrow">Selected Works</p>
        <h2 class="section-title">Spaces That Reframe Urban Life.</h2>
        <p class="section-copy">
          Ramir blends large-scale engineering precision with cultural storytelling, delivering architecture that performs and inspires.
        </p>
      </section>

      <section class="container projects-preview" data-stagger>
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
        />
      </section>

      <section class="container philosophy-preview panel reveal" data-parallax-root>
        <img
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1800&q=80"
          alt="Architectural lobby"
          loading="lazy"
          data-parallax="8"
        />
        <div>
          <p class="eyebrow">Philosophy</p>
          <h3>
            "Architecture is not about buildings, but about the life that happens inside them."
          </h3>
          <RouterLink to="/philosophy" class="btn btn-ghost">Explore Philosophy</RouterLink>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.projects-preview {
  margin-top: clamp(1.2rem, 3vw, 2.2rem);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.philosophy-preview {
  margin-top: clamp(1.4rem, 4vw, 3rem);
  display: grid;
  gap: 0;
  grid-template-columns: 1.05fr 1fr;
  overflow: clip;
}

.philosophy-preview img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.72) contrast(0.95);
}

.philosophy-preview > div {
  padding: clamp(1.2rem, 3vw, 2rem);
  display: grid;
  align-content: center;
  gap: 0.8rem;
}

.philosophy-preview h3 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.6rem, 3.4vw, 2.7rem);
  line-height: 1.16;
}

@media (max-width: 930px) {
  .projects-preview {
    grid-template-columns: 1fr;
  }

  .philosophy-preview {
    grid-template-columns: 1fr;
  }
}
</style>
