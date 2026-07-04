<script setup lang="ts">
import { ref } from 'vue'
import PageHeroIntro from '../components/PageHeroIntro.vue'
import { usePageMotion } from '../composables/usePageMotion'

const page = ref<HTMLElement | null>(null)

const principles = [
  'Sustainability is a creative catalyst, not a technical afterthought.',
  'Cities should be designed for people first, then systems.',
  'Innovation must be legible in experience, not just in technology.',
]

usePageMotion(page)
</script>

<template>
  <section ref="page" class="page philosophy-page">
    <div class="container">
      <PageHeroIntro
        eyebrow="Philosophy"
        title="Architecture is not about buildings, but about the life that happens inside them."
        copy="Every design decision is measured by human experience, climate performance, and long-term civic value."
        image="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=2200&q=80"
        compact
      />
    </div>

    <div class="container principles" data-stagger>
      <article
        v-for="principle in principles"
        :key="principle"
        class="principle stagger-item"
      >
        <p>{{ principle }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.philosophy-page {
  min-height: 80vh;
}

.hero {
  padding: clamp(1rem, 2vw, 1.4rem) 0 clamp(2rem, 8vw, 5rem);
}

.hero h1 {
  margin: 0.8rem 0 0;
  max-width: 20ch;
}

.principles {
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.principle {
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: clamp(1rem, 2vw, 1.5rem);
  background: var(--panel);
  transition: transform 0.4s var(--ease-premium), border-color 0.34s var(--ease-premium);
}

.principle:hover {
  transform: translateY(-4px);
  border-color: rgba(189, 169, 138, 0.5);
}

.principle p {
  margin: 0;
  font-size: clamp(1rem, 1.8vw, 1.22rem);
  color: var(--muted);
}

@media (max-width: 900px) {
  .principles {
    grid-template-columns: 1fr;
  }
}
</style>
