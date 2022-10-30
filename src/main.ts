import { createApp } from 'vue'
import '@purge-icons/generated'

import App from '/@/App.vue'
import router from '/@/router'
import '/@/assets/tailwind.css'
import '/@/assets/style/index.scss'

createApp(App).use(router).mount('#app')
