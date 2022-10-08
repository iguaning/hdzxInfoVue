<template>
  <header>
    <the-header></the-header>
  </header>
  <main>
    <the-weather></the-weather>
    <HomeArticles></HomeArticles>
  </main>
  <footer>
    <the-footer></the-footer>
  </footer>
</template>

<script setup>
import TheHeader from '../components/layouts/header/TheHeader.vue'
import TheWeather from '../components/TheWeather.vue'
import TheFooter from '../components/layouts/footer/TheFooter.vue'
import HomeArticles from '@/components/HomePage/HomeArticles.vue'
</script>

<style scoped>

</style>