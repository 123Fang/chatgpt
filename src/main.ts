import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupAssets, setupDirectives, setupScrollbarStyle } from './plugins'


async function bootstrap() {
  const app = createApp(App)
  setupAssets()
  setupScrollbarStyle()
  setupDirectives(app) // 自定义指令
  setupStore(app) // 安装store
  await setupRouter(app) // 安装vue-router
  app.mount('#app')
}

bootstrap()
