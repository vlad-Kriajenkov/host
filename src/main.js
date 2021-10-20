import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {

  load: {
  
  key: 'AIzaSyAKKIhITpqPIucGTOJJlV3xVIn5o5RztJ4',
  
  libraries: 'places',
  
  }
  
  });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
