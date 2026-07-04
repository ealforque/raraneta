<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header class="site-nav">
    <div class="container nav-inner">
      <RouterLink to="/" class="brand">RAMIR</RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
      </button>

      <nav :class="['nav-links', { open: isOpen }]" aria-label="Main">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="is-active"
        >
          {{ link.label }}
        </RouterLink>

        <RouterLink to="/contact" class="consult-link">Start A Project</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 40;
  border-bottom: 1px solid rgba(233, 227, 214, 0.12);
  backdrop-filter: blur(12px);
  background: rgba(12, 13, 12, 0.72);
}

.nav-inner {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.22em;
  font-size: 0.95rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-link {
  position: relative;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--muted);
  transition: color 0.3s var(--ease-premium);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -0.4rem;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s var(--ease-premium);
}

.nav-link:hover,
.nav-link.is-active {
  color: var(--text);
}

.nav-link:hover::after,
.nav-link.is-active::after {
  transform: scaleX(1);
}

.consult-link {
  padding: 0.62rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(189, 169, 138, 0.42);
  color: var(--text);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: transform 0.35s var(--ease-premium),
    background-color 0.35s var(--ease-premium),
    border-color 0.35s var(--ease-premium);
}

.consult-link:hover {
  transform: translateY(-2px);
  background: rgba(189, 169, 138, 0.17);
  border-color: var(--accent);
}

.menu-toggle {
  display: none;
  background: none;
  border: 0;
  padding: 0;
  color: inherit;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 1px;
  background: var(--text);
}

.menu-toggle span + span {
  margin-top: 7px;
}

@media (max-width: 980px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    inset: 73px 0 auto;
    background: rgba(11, 11, 10, 0.97);
    border-top: 1px solid rgba(233, 227, 214, 0.12);
    border-bottom: 1px solid rgba(233, 227, 214, 0.12);
    transform: translateY(-110%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.4s var(--ease-premium), opacity 0.3s var(--ease-premium);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.3rem 1.2rem;
  }

  .nav-links.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .consult-link {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>
