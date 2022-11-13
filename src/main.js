import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'
import './assets/main.css'

import { appear } from './utils/directive/appear'

const app = createApp(App)

app.use(router)
app.directive('appear', appear)

app.mount('#app')
