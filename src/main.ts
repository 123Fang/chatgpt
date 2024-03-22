import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupStore(app) // 安装store
  await setupRouter(app) // 安装vue-router
  app.mount('#app')
}

bootstrap()
