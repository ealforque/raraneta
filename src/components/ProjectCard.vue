<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '../data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <RouterLink :to="`/projects/${project.id}`" class="project-card stagger-item">
    <div class="media-wrap">
      <img :src="project.cover" :alt="project.name" loading="lazy" />
      <span class="category">{{ project.category }}</span>
    </div>

    <div class="card-body">
      <p class="meta">{{ project.location }} · {{ project.year }}</p>
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0;
  border-radius: 16px;
  border: 1px solid var(--line);
  overflow: clip;
  background: var(--panel);
  min-height: 100%;
  transition: transform 0.45s var(--ease-premium),
    border-color 0.35s var(--ease-premium),
    box-shadow 0.35s var(--ease-premium),
    filter 0.35s var(--ease-premium);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(189, 169, 138, 0.58);
  box-shadow: var(--shadow-card);
  filter: saturate(1.06);
}

.project-card:hover img {
  transform: scale(1.05);
}

.media-wrap {
  position: relative;
  overflow: clip;
  min-height: 260px;
}

.media-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease-premium), filter 0.45s var(--ease-premium);
  filter: contrast(0.92) brightness(0.72);
}

.project-card:hover .media-wrap img {
  filter: contrast(1) brightness(0.86);
}

.category {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  border-radius: 999px;
  background: rgba(9, 10, 9, 0.75);
  border: 1px solid rgba(233, 227, 214, 0.35);
  color: var(--text);
  padding: 0.35rem 0.66rem;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.card-body {
  padding: 1rem;
}

.meta {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
}

h3 {
  margin: 0.6rem 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  line-height: 1.2;
}

p {
  margin: 0;
  color: var(--muted);
}
</style>
