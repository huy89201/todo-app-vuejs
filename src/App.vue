<template>
  <div id="app">
    <div class="container">
      <Title />
      <Input />
      <Select />
      <div class="todo--list--wrapper">
        <div class="todo--list__all" v-if="selected == 0">
          <TodoItem
            v-for="(todo, index) in alltodos"
            :key="todo.id"
            :todo="todo"
            :index="index"
          />
        </div>
        <div class="todo--list__completed" v-if="selected == 1">
          <TodoItem
            v-for="(todo, index) in completeTodos"
            :key="todo.id"
            :todo="todo"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Title from "./components/Title.vue";
import Input from "./components/Input.vue";
import TodoItem from "./components/TodoItem.vue";
import Select from "./components/Select.vue";

export default {
  components: {
    Title,
    Input,
    TodoItem,
    Select,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      alltodos: "getAllTodos",
      completeTodos: "getIsCompleteTodos",
      selected: "getSelectValue",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
  background-color: whitesmoke;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 2rem;
  min-height: 50vh;
}

.todo--list--wrapper {
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}

@media only screen and (max-width: 400px) {
  .container {
    width: 100%;
  }
}
</style>
