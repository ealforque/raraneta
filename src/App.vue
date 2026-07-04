<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import PageLoader from './components/PageLoader.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteNavbar from './components/SiteNavbar.vue'

const route = useRoute()
const isLoading = ref(true)
let loaderTimer: number | undefined

const runLoader = (duration = 820) => {
  isLoading.value = true
  window.clearTimeout(loaderTimer)
  loaderTimer = window.setTimeout(() => {
    isLoading.value = false
  }, duration)
}

onMounted(() => {
  runLoader(1300)
})

watch(
  () => route.fullPath,
  () => {
    runLoader(700)
  },
)

onBeforeUnmount(() => {
  window.clearTimeout(loaderTimer)
})
</script>

<template>
  <div class="app-shell">
    <Transition name="loader-fade">
      <PageLoader v-if="isLoading" />
    </Transition>

    <div class="ambient ambient-top" aria-hidden="true"></div>
    <div class="ambient ambient-bottom" aria-hidden="true"></div>

    <SiteNavbar />

    <main class="app-main">
      <RouterView v-slot="{ Component, route }">
        <Transition name="route" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <SiteFooter />
  </div>
</template>
