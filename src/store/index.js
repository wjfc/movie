import Vue from 'vue';
import Vuex from 'vuex';
import in_theaters from './modules/in_theaters';
import top250 from './modules/top250';

Vue.use(Vuex);
export default new Vuex.Store({
   modules: {
      in_theaters,
      top250
   }
});