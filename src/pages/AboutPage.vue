<script setup lang="ts">
import { ref } from 'vue'
import PageHeroIntro from '../components/PageHeroIntro.vue'
import { usePageMotion } from '../composables/usePageMotion'

const page = ref<HTMLElement | null>(null)

const pillars = ['Sustainability', 'Human-centered Design', 'Innovation', 'Material Intelligence']

const careerTimeline = [
  {
    stage: 'Foundation',
    period: '2012 - 2015',
    text: 'Developed a systems-first design approach rooted in urban sociology and engineering collaboration.',
  },
  {
    stage: 'Global Practice',
    period: '2015 - 2021',
    text: 'Led technical delivery on international civic and residential work, bridging concept and buildability.',
  },
  {
    stage: 'Design Leadership',
    period: '2021 - Present',
    text: 'Directing multidisciplinary teams in landmark architecture and city-scale transformation projects.',
  },
]

usePageMotion(page)
</script>

<template>
  <section ref="page" class="page">
    <div class="container">
      <PageHeroIntro
        eyebrow="About Ramir"
        title="Biography"
        copy="Ramir is a world-class architect shaping high-rise landmarks, sustainable districts, and cultural institutions. His work combines elegant form with strategic urban intelligence, creating architecture that elevates both everyday life and city identity."
        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=80"
        compact
      />
    </div>

    <div class="container grid-2 blocks">
      <article class="panel block reveal">
        <h2>Design Philosophy</h2>
        <p>
          Every project starts with a simple question: how can architecture improve how people move, gather, and
          belong? The studio blends climate strategy, advanced technology, and civic empathy to deliver future-proof
          places.
        </p>
        <div class="pillars">
          <span v-for="pillar in pillars" :key="pillar">{{ pillar }}</span>
        </div>
      </article>

      <article class="panel block reveal">
        <h2>Operating Roles</h2>
        <ul>
          <li>Senior Architect</li>
          <li>Design Director</li>
          <li>Urban Planning Consultant</li>
          <li>Technical Project Lead</li>
        </ul>
      </article>
    </div>

    <div class="container timeline-wrap" data-stagger>
      <p class="eyebrow reveal">Career Progression</p>
      <div class="mini-timeline">
        <article
          v-for="step in careerTimeline"
          :key="step.stage"
          class="mini-item stagger-item"
        >
          <p>{{ step.period }}</p>
          <h3>{{ step.stage }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  margin-bottom: clamp(1.3rem, 3vw, 2rem);
}

.blocks {
  align-items: stretch;
}

.block {
  padding: clamp(1rem, 2vw, 1.5rem);
}

h2 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.3rem, 2.5vw, 2rem);
}

.block p {
  color: var(--muted);
}

.pillars {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.85rem;
}

.pillars span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 0.72rem;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

ul {
  margin: 0.8rem 0 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.34rem;
}

.timeline-wrap {
  margin-top: clamp(1.8rem, 5vw, 3.2rem);
}

.mini-timeline {
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 0.7rem;
}

.mini-item {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem;
  background: var(--panel-strong);
}

.mini-item p {
  margin: 0;
  color: var(--muted);
}

.mini-item p:first-child {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  color: var(--accent);
}

.mini-item h3 {
  margin: 0.52rem 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
}

@media (max-width: 900px) {
  .mini-timeline {
    grid-template-columns: 1fr;
  }
}
</style>
