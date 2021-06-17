const selectStore = {
  state: {
    selectValue: 0,
  },
  getters: {
    getSelectValue: (state) => state.selectValue,
  },
  actions: {
    changeSelectValue({ commit }, value) {
      commit("ACT_CHANGE_SELECT_VALUE", value);
    },
  },
  mutations: {
    ACT_CHANGE_SELECT_VALUE(state, value) {
        state.selectValue = value;
    }
  },
};

export default selectStore;
