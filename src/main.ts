import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupAssets } from './plugins'


async function bootstrap() {
  const app = createApp(App)
  setupAssets()
  setupStore(app) // 安装store
  await setupRouter(app) // 安装vue-router
  app.mount('#app')
}

bootstrap()
