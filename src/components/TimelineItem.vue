<script setup lang="ts">
import type { ExperienceItem } from '../data/experience'

defineProps<{
  item: ExperienceItem
}>()
</script>

<template>
  <article class="timeline-item stagger-item">
    <p class="timeline-year">{{ item.year }}</p>
    <h3>{{ item.role }}</h3>
    <p class="timeline-org">{{ item.organization }} · {{ item.scope }}</p>
    <p class="timeline-summary">{{ item.summary }}</p>
    <ul>
      <li v-for="point in item.achievements" :key="point">{{ point }}</li>
    </ul>
  </article>
</template>

<style scoped>
.timeline-item {
  position: relative;
  margin-left: 1.2rem;
  padding: 0 0 1.3rem 1.4rem;
  border-left: 1px solid rgba(189, 169, 138, 0.33);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 4px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1px solid var(--accent);
  background: #131413;
  box-shadow: 0 0 0 5px rgba(189, 169, 138, 0.12);
}

.timeline-year {
  margin: 0;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

h3 {
  margin: 0.45rem 0 0.4rem;
  font-size: clamp(1.02rem, 1.5vw, 1.2rem);
  font-family: 'Playfair Display', serif;
}

.timeline-org,
.timeline-summary {
  color: var(--muted);
  margin: 0;
}

.timeline-summary {
  margin-top: 0.5rem;
}

ul {
  margin: 0.55rem 0 0;
  padding-left: 1.1rem;
  color: var(--text);
  display: grid;
  gap: 0.34rem;
}
</style>
