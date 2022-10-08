import { request } from '../request/axios'

export class WeatherService {
  static async getWeatherInfo(params) {
    return request('https://v0.yiketianqi.com/api', params, 'GET')
  }
}