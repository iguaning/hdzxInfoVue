import { createApp } from 'vue'

//css
import './index.css'
import './assets/main.css'

//pinia
import { createPinia } from 'pinia'

//router
import router from '@/router'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//REMIX icons
import 'remixicon/fonts/remixicon.css'

//APP
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')