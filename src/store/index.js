import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import poostInput from './modules/poostInput'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    poostInput
    
  }
});
