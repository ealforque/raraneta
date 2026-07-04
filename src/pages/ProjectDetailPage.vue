<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getProjectById, projects } from '../data/projects'
import { usePageMotion } from '../composables/usePageMotion'

const route = useRoute()
const page = ref<HTMLElement | null>(null)

const project = computed(() => getProjectById(String(route.params.id ?? '')))

const projectIndex = computed(() => projects.findIndex((entry) => entry.id === project.value?.id))

const nextProject = computed(() => {
  if (projectIndex.value < 0) {
    return null
  }

  return projects[(projectIndex.value + 1) % projects.length]
})

usePageMotion(page)
</script>

<template>
  <section ref="page" class="page project-detail">
    <div v-if="project" class="container">
      <header class="hero reveal" data-page-hero data-parallax-root>
        <img :src="project.cover" :alt="project.name" loading="eager" data-parallax="10" />
        <div class="hero-graphics" aria-hidden="true">
          <span class="detail-line line-a" data-hero-graphic></span>
          <span class="detail-line line-b" data-hero-graphic></span>
          <svg class="detail-ring" viewBox="0 0 320 320" data-hero-graphic>
            <circle cx="160" cy="160" r="122"></circle>
            <circle cx="160" cy="160" r="86"></circle>
          </svg>
        </div>
        <div class="hero-content">
          <p class="eyebrow" data-hero-el>{{ project.category }}</p>
          <h1 class="section-title" data-hero-el>{{ project.name }}</h1>
          <p class="section-copy" data-hero-el>{{ project.location }} · {{ project.year }}</p>
          <p class="section-copy detail-copy" data-hero-el>{{ project.tagline }}</p>
        </div>
      </header>

      <section class="narrative grid-2">
        <article class="panel detail-block reveal">
          <h2>Concept</h2>
          <p>{{ project.narrative.concept }}</p>
        </article>

        <article class="panel detail-block reveal">
          <h2>Design</h2>
          <p>{{ project.narrative.design }}</p>
        </article>

        <article class="panel detail-block reveal">
          <h2>Execution</h2>
          <p>{{ project.narrative.execution }}</p>
        </article>

        <article class="panel detail-block specs reveal">
          <h2>Project Specs</h2>
          <dl>
            <template v-for="spec in project.specs" :key="spec.label">
              <dt>{{ spec.label }}</dt>
              <dd>{{ spec.value }}</dd>
            </template>
          </dl>
        </article>
      </section>

      <section class="gallery" data-stagger>
        <img
          v-for="(image, index) in project.gallery"
          :key="image"
          :src="image"
          :alt="`${project.name} gallery image ${index + 1}`"
          loading="lazy"
          class="stagger-item"
        />
      </section>

      <div class="next-link reveal" v-if="nextProject">
        <RouterLink :to="`/projects/${nextProject.id}`" class="btn btn-ghost">
          Next Project: {{ nextProject.name }}
        </RouterLink>
      </div>
    </div>

    <div v-else class="container not-found reveal">
      <p class="eyebrow">Project Not Found</p>
      <h1 class="section-title">The project you requested is unavailable.</h1>
      <RouterLink to="/projects" class="btn btn-primary">Back to Projects</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.project-detail {
  padding-top: clamp(1.4rem, 3vw, 2.2rem);
}

.hero {
  position: relative;
  border-radius: 20px;
  overflow: clip;
  border: 1px solid var(--line);
  min-height: clamp(280px, 48vh, 560px);
}

.hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 110%;
  object-fit: cover;
  filter: brightness(0.55) contrast(0.94);
}

.hero-content {
  position: relative;
  z-index: 1;
  min-height: clamp(280px, 48vh, 560px);
  padding: clamp(1.2rem, 4vw, 3rem);
  display: grid;
  align-content: end;
  background: linear-gradient(to top, rgba(8, 9, 8, 0.92), rgba(8, 8, 8, 0.22));
}

.hero-graphics {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.detail-line {
  position: absolute;
  border-top: 1px solid rgba(233, 227, 214, 0.26);
}

.line-a {
  width: 45%;
  left: -5%;
  top: 19%;
  transform: rotate(-12deg);
}

.line-b {
  width: 28%;
  right: -3%;
  bottom: 22%;
  transform: rotate(11deg);
}

.detail-ring {
  position: absolute;
  right: 5%;
  bottom: 6%;
  width: clamp(150px, 20vw, 260px);
  transform: rotate(-14deg);
  opacity: 0.4;
}

.detail-ring circle {
  fill: transparent;
  stroke: rgba(189, 169, 138, 0.46);
  stroke-width: 1.2;
}

.detail-copy {
  color: var(--text);
  max-width: 52ch;
}

.narrative {
  margin-top: 1rem;
}

.detail-block {
  padding: 1rem;
}

.detail-block h2 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
}

.detail-block p {
  margin: 0.72rem 0 0;
  color: var(--muted);
}

.specs dl {
  margin: 0.8rem 0 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.36rem 1rem;
}

.specs dt {
  color: var(--accent);
}

.specs dd {
  margin: 0;
  color: var(--text);
}

.gallery {
  margin-top: 1rem;
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gallery img {
  border-radius: 14px;
  border: 1px solid var(--line);
  min-height: 220px;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.9);
}

.next-link {
  margin-top: 1rem;
}

.not-found {
  min-height: 52vh;
  display: grid;
  align-content: center;
  gap: 0.8rem;
}

@media (max-width: 900px) {
  .detail-ring,
  .line-b {
    display: none;
  }

  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
