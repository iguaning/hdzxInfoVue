<template>
  <h2>api数据:</h2>
  <h2 v-for="list in dataList.list">{{ list }}</h2>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { WeatherService} from '@/api/apis'

const dataList = reactive({
  list: {
    date: '',
    week: '',
    update_time: '',
    city: '',
    tem: ''
  }
})

const getWeatherInfo = () => {
  const weatherParams = {
    appid: '29781333',
    appsecret: 'xW4VaHB3',
    version: 'v62',
    city: '武汉'
  }
  WeatherService.getWeatherInfo(weatherParams).then((res) => {
    // console.log(res.data)
    dataList.list.date = res.data.date
    dataList.list.week = res.data.week
    dataList.list.update_time = res.data.update_time
    dataList.list.city = res.data.city
    dataList.list.tem = res.data.tem
  })
}

onMounted(() => {
  getWeatherInfo()
})
</script>

<style scoped>

</style>