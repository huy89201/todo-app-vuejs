<template>
  <select class="select--wrapper" :value="selected" @change="handleSelect">
    <option value="0">All</option>
    <option value="1">Completed</option>
  </select>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Select",
  computed: {
    ...mapGetters({
      selected: "getSelectValue",
    }),
  },
  methods: {
    ...mapActions(["changeSelectValue"]),
    handleSelect(evt) {
        this.changeSelectValue(evt.target.value)
    },
  },
};
</script>

<style scoped>
.select--wrapper {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  outline: none;
  background-color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
}
</style>
