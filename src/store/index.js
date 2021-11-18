import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import poostInput from './modules/poostInput'
import articles from './modules/getArticles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    poostInput,
    articles
  }
});
