//import './assets/main.css'
import '../public/registerServiceWorker';
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

createApp(App).use(router).mount('#app')
