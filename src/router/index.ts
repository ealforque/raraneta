import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/ProjectsPage.vue'),
      meta: { title: 'Projects' },
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('../pages/ProjectDetailPage.vue'),
      meta: { title: 'Project Detail' },
    },
    {
      path: '/philosophy',
      name: 'philosophy',
      component: () => import('../pages/PhilosophyPage.vue'),
      meta: { title: 'Philosophy' },
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../pages/ExperiencePage.vue'),
      meta: { title: 'Experience' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue'),
      meta: { title: 'Contact' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const baseTitle = 'Ramir | Architectural Studio'
  const pageTitle = to.meta?.title ? `${String(to.meta.title)} · ${baseTitle}` : baseTitle
  document.title = pageTitle
})

export default router
