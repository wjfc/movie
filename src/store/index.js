import Vue from 'vue';
import Vuex from 'vuex';
import in_theaters from './modules/in_theaters';

Vue.use(Vuex);
export default new Vuex.Store({
   modules: {
      in_theaters 
   }
});