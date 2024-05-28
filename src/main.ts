// main.js
import { createApp } from 'vue'
import uviewPlus from 'uview-plus'
import App from './App.vue'

const app = createApp(App)
app.use(uviewPlus)
app.mount('#app')
