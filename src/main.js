import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/styles.css'

createApp(App).use(router).mount('#app')