<template>
  <section class="hero" data-page-hero data-parallax-root>
    <img
      class="hero-bg hero-bg-back"
      src="https://images.unsplash.com/photo-1465808028273-67c93e5bb38f?auto=format&fit=crop&w=2200&q=80"
      alt="Architectural skyline"
      loading="eager"
      data-parallax="6"
      data-hero-bg
    />
    <img
      class="hero-bg hero-bg-front"
      src="https://images.unsplash.com/photo-1465808028273-67c93e5bb38f?auto=format&fit=crop&w=2200&q=80"
      alt="Architectural skyline"
      loading="eager"
      data-parallax="12"
      data-hero-bg
    />
    <div class="hero-overlay"></div>
    <div class="hero-light" data-hero-graphic></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div class="hero-graphics" aria-hidden="true">
      <span class="wire wire-a" data-hero-graphic data-hero-scan></span>
      <span class="wire wire-b" data-hero-graphic data-hero-scan></span>
      <span class="wire wire-c" data-hero-graphic data-hero-scan></span>
      <span class="hero-orb" data-hero-graphic data-float></span>
      <span class="hero-orb hero-orb-small" data-hero-graphic data-float></span>
      <div class="hero-wireframe" data-hero-graphic></div>
      <svg class="hero-ring" viewBox="0 0 320 320" data-hero-graphic>
        <circle cx="160" cy="160" r="122"></circle>
        <circle cx="160" cy="160" r="84"></circle>
      </svg>
    </div>

    <div class="container hero-content">
      <p class="eyebrow" data-hero-el>Global Architectural Practice</p>
      <div class="hero-identity" data-hero-el>
        <div class="hero-name-stack">
          <h1 class="hero-title">Ramir</h1>
          <p class="hero-subtitle">Architectural Designer &amp; Urban Visionary</p>
        </div>

        <figure class="hero-profile-figure">
          <img
            class="hero-profile-photo"
            src="https://placehold.co/900x1100/1a1b1a/d8cfbd?text=User+Photo"
            alt="Placeholder user profile photo"
            loading="lazy"
          />
          <figcaption>
            <p>Ramir</p>
            <span>Senior Architect · Design Director</span>
          </figcaption>
        </figure>
      </div>

      <p class="hero-copy" data-hero-el>
        Designing spaces that shape how cities live and breathe.
      </p>

      <div class="hero-actions" data-hero-el>
        <RouterLink class="btn btn-primary" to="/projects">View Projects</RouterLink>
        <RouterLink class="btn btn-ghost" to="/contact">Contact</RouterLink>
      </div>

      <div class="hero-chip-wrap" data-hero-el aria-hidden="true">
        <span class="hero-chip">Landmark Towers</span>
        <span class="hero-chip">Smart Urbanism</span>
        <span class="hero-chip">Civic Futures</span>
      </div>

      <div class="hero-stats" data-stagger>
        <article class="stat-card stagger-item" data-float>
          <h3>58+</h3>
          <p>International projects delivered</p>
        </article>
        <article class="stat-card stagger-item" data-float>
          <h3>15 Cities</h3>
          <p>Integrated urban transformations</p>
        </article>
        <article class="stat-card stagger-item" data-float>
          <h3>12 Awards</h3>
          <p>Design and sustainability recognition</p>
        </article>
      </div>

      <span class="scroll-indicator" data-hero-el aria-hidden="true">Scroll</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 88px);
  border-bottom: 1px solid rgba(233, 227, 214, 0.2);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.32);
  overflow: clip;
  isolation: isolate;
}

.hero-bg {
  position: absolute;
  inset: -10% 0 0;
  width: 100%;
  height: 122%;
  object-fit: cover;
  transform-origin: center;
}

.hero-bg-back {
  filter: brightness(0.2) saturate(0.56) blur(2px) contrast(0.9);
}

.hero-bg-front {
  filter: brightness(0.6) saturate(0.92) contrast(0.95);
  mix-blend-mode: screen;
  opacity: 0.52;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(circle at 82% 18%, rgba(189, 169, 138, 0.28), rgba(189, 169, 138, 0) 34%),
    linear-gradient(to top, rgba(8, 9, 8, 0.96) 10%, rgba(8, 9, 8, 0.58) 44%, rgba(9, 10, 8, 0.9) 100%);
}

.hero-light {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    100deg,
    rgba(189, 169, 138, 0) 36%,
    rgba(189, 169, 138, 0.18) 49%,
    rgba(189, 169, 138, 0) 63%
  );
  transform: translateX(-24%);
}

.hero-grain {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.2;
  background-image: radial-gradient(rgba(255, 255, 255, 0.3) 0.56px, transparent 0.56px);
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

.wire {
  position: absolute;
  border-top: 1px solid rgba(233, 227, 214, 0.33);
}

.wire-a {
  width: 42%;
  left: -5%;
  top: 21%;
  transform: rotate(-12deg);
}

.wire-b {
  width: 38%;
  right: calc(var(--edge-gutter) - 2.4rem);
  bottom: 28%;
  transform: rotate(15deg);
}

.wire-c {
  width: 29%;
  right: calc(var(--edge-gutter) + 0.3rem);
  top: 12%;
  transform: rotate(-22deg);
}

.hero-orb {
  position: absolute;
  width: clamp(130px, 14vw, 220px);
  aspect-ratio: 1;
  right: calc(var(--edge-gutter) + 2rem);
  top: 13%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(189, 169, 138, 0.4), rgba(189, 169, 138, 0));
  filter: blur(14px);
}

.hero-orb-small {
  width: clamp(56px, 8vw, 100px);
  right: auto;
  left: 11%;
  top: auto;
  bottom: 18%;
  background: radial-gradient(circle, rgba(164, 184, 226, 0.35), rgba(164, 184, 226, 0));
}

.hero-ring {
  position: absolute;
  right: calc(var(--edge-gutter) + 0.7rem);
  bottom: 6%;
  width: clamp(190px, 24vw, 320px);
  opacity: 0.5;
  transform: rotate(-14deg);
}

.hero-ring circle {
  fill: none;
  stroke: rgba(189, 169, 138, 0.48);
  stroke-width: 1.2;
}

.hero-wireframe {
  position: absolute;
  width: min(540px, 54%);
  height: min(320px, 58%);
  right: calc(var(--edge-gutter) - 2.6rem);
  bottom: -12%;
  border: 1px solid rgba(189, 169, 138, 0.28);
  border-radius: 28px;
  transform: rotate(-14deg);
  background-image:
    linear-gradient(to right, rgba(189, 169, 138, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(189, 169, 138, 0.18) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 3;
  min-height: calc(100vh - 88px);
  display: grid;
  align-content: center;
  gap: 1rem;
  padding-top: clamp(2.5rem, 8vh, 5rem);
  padding-bottom: clamp(2rem, 6vh, 4rem);
  padding-right: clamp(1rem, 4vw, 3rem);
}

.hero-identity {
  position: relative;
  width: 100%;
  min-height: clamp(140px, 17vw, 230px);
  padding-right: clamp(180px, 19vw, 280px);
}

.hero-name-stack {
  min-height: 100%;
  display: grid;
  align-content: space-between;
  gap: 0.7rem;
}

.hero-title {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 10vw, 8.4rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.hero-profile-photo {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  object-fit: cover;
  border: 1px solid rgba(233, 227, 214, 0.65);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
}

.hero-profile-figure {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transform: none;
  width: clamp(170px, 18vw, 260px);
  margin: 0;
  padding: 0.55rem;
  border-radius: 22px;
  border: 1px solid rgba(233, 227, 214, 0.3);
  background: rgba(11, 12, 11, 0.62);
  backdrop-filter: blur(12px);
}

.hero-profile-figure figcaption {
  margin-top: 0.55rem;
}

.hero-profile-figure p {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
}

.hero-profile-figure span {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.hero-subtitle {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  font-size: clamp(0.9rem, 1.4vw, 1rem);
}

.hero-copy {
  margin: 0;
  max-width: 62ch;
  color: var(--text);
  font-size: clamp(1rem, 2.2vw, 1.25rem);
}

.hero-actions {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-top: 0.3rem;
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

.hero-stats {
  margin-top: clamp(1rem, 2.5vw, 2.2rem);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.stat-card {
  border: 1px solid rgba(233, 227, 214, 0.22);
  background: rgba(16, 17, 15, 0.56);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 0.95rem;
  transition: transform 0.4s var(--ease-premium), border-color 0.35s var(--ease-premium),
    box-shadow 0.35s var(--ease-premium);
}

.stat-card:hover {
  transform: translateY(-5px) scale(1.01);
  border-color: rgba(189, 169, 138, 0.65);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.36);
}

.stat-card h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.stat-card p {
  margin: 0.35rem 0 0;
  color: var(--muted);
  font-size: 0.86rem;
}

.scroll-indicator {
  margin-top: 0.3rem;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 0.72rem;
  color: var(--muted);
  animation: bob 1.7s ease-in-out infinite;
}

@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(6px);
  }
}

@media (max-width: 860px) {
  .hero-ring,
  .wire-b,
  .hero-wireframe {
    display: none;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-content {
    padding-right: 0;
  }

  .hero-identity {
    min-height: auto;
    padding-right: 0;
    display: grid;
    gap: 0.8rem;
  }

  .hero-name-stack {
    min-height: auto;
    align-content: start;
    gap: 0.55rem;
  }

  .hero-subtitle {
    max-width: 32ch;
    line-height: 1.4;
  }

  .hero-profile-figure {
    position: relative;
    top: auto;
    bottom: auto;
    right: auto;
    transform: none;
    width: min(280px, calc(100% - 2.6rem));
    margin: 0 auto 0.9rem;
    display: grid;
    gap: 0.6rem;
  }

  .hero-profile-photo {
    height: auto;
    aspect-ratio: 3 / 4;
  }

  .hero-profile-figure figcaption {
    margin-top: 0;
  }

  .hero-chip {
    letter-spacing: 0.08em;
    font-size: 0.64rem;
  }
}
</style>
