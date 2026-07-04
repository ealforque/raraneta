<template>
  <footer class="footer page">
    <div class="container footer-grid">
      <div class="footer-intro">
        <p class="eyebrow">Ramir Studio</p>
        <h3 class="footer-title">Architecture For The Next City.</h3>
        <p class="footer-copy">
          International architecture practice focused on landmark towers, sustainable districts, and civic futures.
        </p>
      </div>

      <nav class="footer-links" aria-label="Footer navigation">
        <a href="#/about">About</a>
        <a href="#/projects">Projects</a>
        <a href="#/philosophy">Philosophy</a>
        <a href="#/experience">Experience</a>
        <a href="#/contact">Contact</a>
      </nav>

      <div class="footer-meta">
        <p>Global Consultant</p>
        <a href="mailto:ramir@architecturestudio.com">ramir@architecturestudio.com</a>
        <div class="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p class="copyright">© {{ new Date().getFullYear() }} Ramir. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding-top: clamp(1.5rem, 3vw, 2.8rem);
  padding-bottom: clamp(2rem, 4vw, 3rem);
}

.footer-grid {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1.3fr 0.8fr 1fr;
}

.footer-title {
  margin: 0.6rem 0 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  font-weight: 500;
}

.footer-copy {
  margin: 0.8rem 0 0;
  color: var(--muted);
  max-width: 44ch;
}

.footer-links {
  display: grid;
  align-content: flex-start;
  gap: 0.35rem;
}

.footer-links a {
  width: fit-content;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  transition: color 0.3s var(--ease-premium), transform 0.3s var(--ease-premium);
}

.footer-links a:hover {
  color: var(--text);
  transform: translateX(3px);
}

.footer-meta {
  display: grid;
  gap: 0.4rem;
  color: var(--muted);
  justify-items: flex-start;
}

.footer-meta a {
  color: var(--text);
}

.footer-socials {
  margin-top: 0.4rem;
  display: flex;
  gap: 0.6rem;
}

.footer-socials a {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: border-color 0.3s var(--ease-premium), color 0.3s var(--ease-premium);
}

.footer-socials a:hover {
  border-color: var(--accent);
  color: var(--text);
}

.copyright {
  margin-top: 0.7rem;
  font-size: 0.82rem;
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
