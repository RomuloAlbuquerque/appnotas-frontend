//import './assets/main.css'
import '../public/registerServiceWorker';
import { createApp } from 'vue'
import App from './App.vue'
import router from './4-routes'
import './index.css'
import { handlerInstallApp } from './3-services/pwa/handlerInstallApp';

createApp(App).use(router).mount('#app')

handlerInstallApp()




