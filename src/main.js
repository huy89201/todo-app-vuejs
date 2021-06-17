import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTrash,
  faPen,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faPen, faCheck, faPlus);

Vue.component("fa", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  el: "#app",
  render: (h) => h(App),
}).$mount("#app");
