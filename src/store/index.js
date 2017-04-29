import Vue from 'vue';
import Vuex from 'vuex';
import in_theaters from './modules/in_theaters';
import top250 from './modules/top250';
import detail from './modules/detail'
import coming_soon from './modules/coming_soon'
import weekly from './modules/weekly'
import new_movies from './modules/new_movies'

Vue.use(Vuex);
export default new Vuex.Store({
   modules: {
      in_theaters,
      top250,
      detail,
      coming_soon,
      weekly,
      new_movies
   }
});