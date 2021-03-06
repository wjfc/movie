import "babel-polyfill";
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router';
import store from './store';
import App from './App.vue'


Vue.use(ElementUI)
// 在vuejs中，h函数仅是作为createElement函数之缩写
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root');
