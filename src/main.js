import Vue from "vue";
import { Button } from "mint-ui";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import './mock/mockServer';
import loading from './assets/imgs/loading.gif';
import './filters/filter';

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.use(VueLazyload,{
  loading
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
