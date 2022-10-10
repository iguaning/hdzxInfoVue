<template>
  <the-header></the-header>
  <main>
    <the-weather></the-weather>
    <HomeArticles></HomeArticles>
    <LoginModel></LoginModel>
  </main>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from '../components/layouts/header/TheHeader.vue'
import TheFooter from '../components/layouts/footer/TheFooter.vue'
import TheWeather from '../components/TheWeather.vue'
import HomeArticles from '@/components/HomePage/HomeArticles.vue'
import LoginModel from '@/components/models/LoginModel.vue'
import { useModelStore } from '@/stores/Model'
import { storeToRefs } from 'pinia'

const useModel = useModelStore()
const { login, loginSwitch } = storeToRefs(useModel)
</script>