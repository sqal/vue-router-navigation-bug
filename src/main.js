import Vue from 'vue'
import App from './App.vue'
import { router, resolveRoute } from './router'
import { auth } from './auth';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

async function init() {
  await auth.login(true)
  await resolveRoute(auth.isAuthenticated())
}

init()
