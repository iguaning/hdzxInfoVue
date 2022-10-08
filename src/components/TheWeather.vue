<template>
  <div class="mt-4">
    <h3 class="text-lg leading-6 font-medium text-gray-900">今日天气</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ dataList[0].name }}
        </dt>
        <dd class="mt-1 text-2xl font-semibold text-gray-900">
          {{ dataList[0].stat.date }} {{ dataList[0].stat.week }} {{ dataList[0].stat.update_time }}
        </dd>
      </div>
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ dataList[1].name }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ dataList[1].stat.city }}
        </dd>
      </div>
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ dataList[2].name }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ dataList[2].stat.tem }}℃
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { WeatherService} from '@/api/apis'

const dataList = reactive([
  {
    name: '更新时间',
    stat: {
      date: '',
      week: '',
      update_time: ''
    }
  },
  {
    name: '城市',
    stat: {
      city: ''
    }
  },
  {
    name: '温度℃',
    stat: {
      tem: ''
    }
  }
])

// const dataList = reactive({
//   list: {
//     day: {
//       date: '',
//       week: '',
//       update_time: '',
//     },
//     city: '',
//     tem: ''
//   }
// })

const getWeatherInfo = () => {
  const weatherParams = {
    appid: '29781333',
    appsecret: 'xW4VaHB3',
    version: 'v62',
    city: '武汉'
  }
  WeatherService.getWeatherInfo(weatherParams).then((res) => {
    // console.log(res.data)
    dataList[0].stat.date = res.data.date
    dataList[0].stat.week = res.data.week
    dataList[0].stat.update_time = res.data.update_time
    dataList[1].stat.city = res.data.city
    dataList[2].stat.tem = res.data.tem
  })
}

onMounted(() => {
  getWeatherInfo()
})
</script>