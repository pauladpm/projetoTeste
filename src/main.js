// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
// Add all icons to the library so you can use it in your page
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as GlobalComponents from './components/globals'

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab)

Vue.component('awesome-icon', FontAwesomeIcon)

Object.values(GlobalComponents.default)
  .forEach(globalComponent => Vue
    .component(globalComponent.name, globalComponent))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
