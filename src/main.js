//import './assets/main.css'
import '../public/registerServiceWorker';
import { createApp } from 'vue'
import App from './App.vue'
import router from './4-routes'
import './index.css'

createApp(App).use(router).mount('#app')
