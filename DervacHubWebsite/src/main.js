import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './routes';

const app = createApp(App)


app.use(router);
app.use(createPinia(App))
app.mount('#app')
