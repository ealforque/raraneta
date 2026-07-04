<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    copy: string
    image?: string
    compact?: boolean
  }>(),
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80',
    compact: false,
  },
)

const classes = computed(() => ['page-hero-intro', { compact: props.compact }])
</script>

<template>
  <header :class="classes" data-page-hero data-parallax-root>
    <img
      class="hero-image hero-image-back"
      :src="image"
      alt="Architectural atmosphere"
      loading="lazy"
      data-parallax="6"
      data-hero-bg
    />
    <img
      class="hero-image hero-image-front"
      :src="image"
      alt="Architectural atmosphere"
      loading="lazy"
      data-parallax="12"
      data-hero-bg
    />
    <div class="hero-wash"></div>
    <div class="hero-light" data-hero-graphic></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div class="hero-graphics" aria-hidden="true">
      <span class="line line-a" data-hero-graphic data-hero-scan></span>
      <span class="line line-b" data-hero-graphic data-hero-scan></span>
      <span class="line line-c" data-hero-graphic data-hero-scan></span>
      <span class="orb" data-float data-hero-graphic></span>
      <span class="orb orb-small" data-float data-hero-graphic></span>
      <div class="wireframe" data-hero-graphic></div>
      <svg class="ring" viewBox="0 0 320 320" data-hero-graphic>
        <circle cx="160" cy="160" r="120"></circle>
        <circle cx="160" cy="160" r="86"></circle>
      </svg>
    </div>

    <div class="hero-content">
      <p class="eyebrow" data-hero-el>{{ eyebrow }}</p>
      <h1 class="section-title" data-hero-el>{{ title }}</h1>
      <p class="section-copy" data-hero-el>{{ copy }}</p>
      <div class="hero-bottom" data-hero-el>
        <div class="hero-slot">
          <slot></slot>
        </div>
        <div class="hero-chip-wrap" aria-hidden="true">
          <span class="hero-chip">Global Practice</span>
          <span class="hero-chip">Future Cities</span>
          <span class="hero-chip">Cultural Intelligence</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.page-hero-intro {
  position: relative;
  border-radius: 20px;
  border: 1px solid rgba(233, 227, 214, 0.2);
  box-shadow: 0 34px 80px rgba(0, 0, 0, 0.36);
  overflow: clip;
  min-height: clamp(360px, 60vh, 620px);
  margin-bottom: clamp(1.2rem, 3vw, 2.4rem);
  isolation: isolate;
}

.page-hero-intro.compact {
  min-height: clamp(230px, 35vh, 360px);
  margin-bottom: clamp(0.8rem, 2vw, 1.2rem);
}

.hero-image {
  position: absolute;
  inset: -10% 0 0;
  width: 100%;
  height: 122%;
  object-fit: cover;
  transform-origin: center;
}

.hero-image-back {
  filter: brightness(0.2) saturate(0.55) blur(2px) contrast(0.9);
}

.hero-image-front {
  filter: brightness(0.6) saturate(0.9) contrast(0.95);
  mix-blend-mode: screen;
  opacity: 0.54;
}

.hero-wash {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(circle at 84% 16%, rgba(189, 169, 138, 0.27), rgba(189, 169, 138, 0) 34%),
    linear-gradient(118deg, rgba(6, 7, 6, 0.93) 30%, rgba(8, 10, 9, 0.62) 74%, rgba(7, 7, 6, 0.95) 100%);
}

.hero-light {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    100deg,
    rgba(189, 169, 138, 0) 38%,
    rgba(189, 169, 138, 0.16) 50%,
    rgba(189, 169, 138, 0) 62%
  );
  transform: translateX(-25%);
}

.hero-grain {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.2;
  background-image: radial-gradient(rgba(255, 255, 255, 0.28) 0.55px, transparent 0.55px);
  background-size: 3px 3px;
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.hero-graphics {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.line {
  position: absolute;
  border-top: 1px solid rgba(219, 206, 182, 0.33);
}

.line-a {
  width: 42%;
  left: -5%;
  top: 22%;
  transform: rotate(-12deg);
}

.line-b {
  width: 38%;
  right: calc(var(--edge-gutter) - 2.4rem);
  bottom: 30%;
  transform: rotate(15deg);
}

.line-c {
  width: 28%;
  right: calc(var(--edge-gutter) + 0.8rem);
  top: 12%;
  transform: rotate(-22deg);
}

.orb {
  position: absolute;
  width: clamp(130px, 14vw, 210px);
  aspect-ratio: 1;
  border-radius: 50%;
  right: calc(var(--edge-gutter) + 1.5rem);
  top: 16%;
  background: radial-gradient(circle, rgba(189, 169, 138, 0.38), rgba(189, 169, 138, 0));
  filter: blur(14px);
}

.orb-small {
  width: clamp(56px, 8vw, 98px);
  right: auto;
  left: 11%;
  top: auto;
  bottom: 20%;
  background: radial-gradient(circle, rgba(164, 184, 226, 0.34), rgba(164, 184, 226, 0));
}

.ring {
  position: absolute;
  width: clamp(190px, 24vw, 320px);
  right: calc(var(--edge-gutter) + 0.7rem);
  bottom: 6%;
  opacity: 0.5;
  transform: rotate(-13deg);
}

.ring circle {
  fill: transparent;
  stroke: rgba(189, 169, 138, 0.48);
  stroke-width: 1.2;
}

.wireframe {
  position: absolute;
  width: min(520px, 54%);
  height: min(320px, 58%);
  right: calc(var(--edge-gutter) - 2.6rem);
  bottom: -12%;
  border: 1px solid rgba(189, 169, 138, 0.26);
  border-radius: 28px;
  transform: rotate(-14deg);
  background-image:
    linear-gradient(to right, rgba(189, 169, 138, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(189, 169, 138, 0.18) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.42;
}

.hero-content {
  position: relative;
  z-index: 3;
  min-height: clamp(360px, 60vh, 620px);
  display: grid;
  align-content: end;
  gap: 0.95rem;
  padding: clamp(1.1rem, 4vw, 3rem);
  max-width: 74ch;
}

.page-hero-intro.compact .hero-content {
  min-height: clamp(230px, 35vh, 360px);
  align-content: center;
}

.hero-bottom {
  margin-top: 0.35rem;
  display: grid;
  gap: 0.95rem;
}

.hero-chip-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.hero-chip {
  border: 1px solid rgba(189, 169, 138, 0.45);
  border-radius: 999px;
  padding: 0.4rem 0.72rem;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d8cfbd;
  background: rgba(10, 11, 10, 0.56);
  backdrop-filter: blur(6px);
}

@media (max-width: 780px) {
  .ring,
  .line-b,
  .wireframe {
    display: none;
  }

  .hero-chip-wrap {
    gap: 0.35rem;
  }

  .hero-chip {
    letter-spacing: 0.08em;
    font-size: 0.64rem;
  }

  .hero-content {
    min-height: clamp(320px, 54vh, 500px);
  }
}
</style>
