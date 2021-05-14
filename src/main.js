import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Malert from 'moon-vue-alert'

createApp(App).use(store).use(router).use(Malert).mount('#app')
