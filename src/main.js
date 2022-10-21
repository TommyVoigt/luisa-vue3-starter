import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Luisa from 'luisa-vue'


createApp(App)
    .use(router)
    .use(Luisa)
    .use(axios)
    .mount('#app')