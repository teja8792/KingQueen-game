import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router";
import Uikit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

Uikit.use(Icons);

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.prototype.$uikit = Uikit;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
