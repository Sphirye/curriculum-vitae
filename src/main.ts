import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import './assets/FontStyles.css'
import './assets/TextSizingStyles.css'
//@ts-ignore
import vueLineClamp from 'vue-line-clamp'

import axios from "axios"
import vueAxios from "vue-axios"

import VueHexagonal from '@sphirye/vue-hexagonal-container'

Vue.config.productionTip = false

Vue.use(vueAxios, axios)
Vue.use(vueLineClamp)
Vue.use(VueHexagonal)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
