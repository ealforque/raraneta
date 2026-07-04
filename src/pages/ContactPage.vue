<script setup lang="ts">
import { ref } from 'vue'
import PageHeroIntro from '../components/PageHeroIntro.vue'
import { usePageMotion } from '../composables/usePageMotion'

const page = ref<HTMLElement | null>(null)
const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const onSubmit = () => {
  submitted.value = true
  name.value = ''
  email.value = ''
  message.value = ''
}

usePageMotion(page)
</script>

<template>
  <section ref="page" class="page contact-page" data-parallax-root>
    <div class="contact-bg" data-parallax="11" aria-hidden="true"></div>

    <div class="container contact-grid">
      <div class="contact-hero-wrap">
        <PageHeroIntro
          eyebrow="Contact"
          title="Let’s Build A Defining Project."
          copy="For collaborations in architecture, urban planning, and civic transformation, reach out directly."
          image="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?auto=format&fit=crop&w=2200&q=80"
          compact
        />
      </div>

      <article class="panel contact-info reveal">
        <p class="eyebrow">Contact</p>
        <h1 class="section-title">Let’s Build A Defining Project.</h1>
        <p class="section-copy">
          For collaborations in architecture, urban planning, and civic transformation, reach out directly.
        </p>

        <div class="detail-list">
          <p><span>Email</span> <a href="mailto:ramir@architecturestudio.com">ramir@architecturestudio.com</a></p>
          <p><span>Location</span> Global Consultant</p>
        </div>

        <div class="socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </article>

      <form class="panel contact-form reveal" @submit.prevent="onSubmit">
        <label>
          Name
          <input v-model="name" type="text" name="name" required autocomplete="name" />
        </label>

        <label>
          Email
          <input v-model="email" type="email" name="email" required autocomplete="email" />
        </label>

        <label>
          Message
          <textarea v-model="message" name="message" rows="6" required></textarea>
        </label>

        <button class="btn btn-primary" type="submit">Send Inquiry</button>
        <p v-if="submitted" class="submitted">Thanks. Your inquiry has been prepared for Ramir’s studio.</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  position: relative;
  overflow: clip;
}

.contact-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(9, 10, 9, 0.82), rgba(9, 10, 9, 0.94)),
    url('https://images.unsplash.com/photo-1465808028273-67c93e5bb38f?auto=format&fit=crop&w=1800&q=80')
      center / cover;
  opacity: 0.42;
}

.contact-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
}

.contact-hero-wrap {
  width: 100%;
}

.contact-hero-wrap :deep(.page-hero-intro) {
  margin-bottom: 0.2rem;
}

.contact-info .section-title {
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
}

.contact-info,
.contact-form {
  padding: clamp(1rem, 2.4vw, 1.7rem);
}

.detail-list {
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;
}

.detail-list p {
  margin: 0;
}

.detail-list span {
  color: var(--accent);
  margin-right: 0.4rem;
}

.socials {
  margin-top: 1rem;
  display: flex;
  gap: 0.6rem;
}

.socials a {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.8rem;
  color: var(--muted);
  transition: color 0.3s var(--ease-premium), border-color 0.3s var(--ease-premium);
}

.socials a:hover {
  color: var(--text);
  border-color: var(--accent);
}

.contact-form {
  display: grid;
  gap: 0.7rem;
}

label {
  display: grid;
  gap: 0.4rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(14, 15, 14, 0.88);
  color: var(--text);
  padding: 0.72rem 0.76rem;
  font: inherit;
}

input:focus,
textarea:focus {
  outline: 1px solid var(--accent);
  border-color: rgba(189, 169, 138, 0.6);
}

.submitted {
  margin: 0;
  color: var(--accent);
  font-size: 0.9rem;
}

@media (max-width: 940px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
