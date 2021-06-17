<template>
  <form class="input--wrapper" @submit="handleSubmit">
    <input
      type="text"
      class="input"
      v-model="todo.title"
      @change="handleInput"
    />
    <button class="submit--btn">
      <fa :icon="['fas', 'plus']" />
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Input",
  data() {
    return {
      todo: {
        id: 0,
        title: "",
        isComplete: false,
      },
    };
  },
  methods: {
    ...mapActions(["addingTodo"]),
    handleInput(evt) {
      this.todo.title = evt.target.value;
    },
    handleSubmit(evt) {
      evt.preventDefault();

      if (!this.todo.title) return;

      this.addingTodo({
        ...this.todo,
        id: Math.round(Math.random() * 9999),
        title: this.todo.title,
      });

      this.todo = {
        id: 0,
        title: "",
        isComplete: false,
      };
    },
  },
};
</script>

<style scoped>
.input--wrapper {
  display: flex;
  justify-content: center;
}

.input,
.submit--btn {
  border: none;
  padding: 8px 16px;
  font-size: 2rem;
}

.input {
  width: 30%;
  outline: none;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  padding-right: 0;
}

.submit--btn {
  width: 10%;
  background-color: #ffffff;
  border-left: none;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.submit--btn:hover {
  background-color: #bf1650;
  color: #fff;
}
</style>
