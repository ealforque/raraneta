<script setup lang="ts">
import { ref } from 'vue'
import PageHeroIntro from '../components/PageHeroIntro.vue'
import TimelineItem from '../components/TimelineItem.vue'
import { experience } from '../data/experience'
import { usePageMotion } from '../composables/usePageMotion'

const page = ref<HTMLElement | null>(null)

usePageMotion(page)
</script>

<template>
  <section ref="page" class="page">
    <div class="container">
      <PageHeroIntro
        eyebrow="Experience"
        title="Design Leadership Across Scales"
        copy="From technical delivery to strategic direction, Ramir has built a practice grounded in clarity, performance, and architectural ambition."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80"
        compact
      />
    </div>

    <div class="container timeline panel" data-stagger>
      <div class="progress-line" aria-hidden="true"></div>
      <TimelineItem
        v-for="item in experience"
        :key="item.year + item.role"
        :item="item"
      />
    </div>
  </section>
</template>

<style scoped>
.timeline {
  margin-top: 1rem;
  padding: 1.1rem 1rem;
  position: relative;
}

.progress-line {
  position: absolute;
  left: 2rem;
  top: 1.25rem;
  bottom: 1.4rem;
  width: 1px;
  background: linear-gradient(to bottom, rgba(189, 169, 138, 0.15), rgba(189, 169, 138, 0.7));
}
</style>
