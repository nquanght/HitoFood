import './assets/main.css'

// import external plugins
import '@/plugins/bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Prevents the last scroll location on the page to be restored
if (history.scrollRestoration && history.scrollRestoration !== 'manual') {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

