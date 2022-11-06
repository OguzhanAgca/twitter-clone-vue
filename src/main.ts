import { createApp } from 'vue'
import '@purge-icons/generated'
import { createHead } from '@vueuse/head'

import App from '/@/App.vue'
import router from '/@/router'
import '/@/assets/tailwind.css'
import '/@/assets/style/index.scss'

const head = createHead()

const app = createApp(App)

app.use(router)
app.use(head)
app.mount('#app')
