import Vue from "vue";
import Vuex from "vuex";
import todoStore from './todoStore'
import selectStore from './SelectStore'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todo: todoStore,
    select: selectStore,
  }
});

export default store;
