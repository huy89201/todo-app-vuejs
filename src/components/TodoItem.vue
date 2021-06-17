<template>
  <div class="todo--item--wrapper">
    <div class="todo--item__id">{{ `#${index + 1}` }}</div>
    <div
      :class="{
        'todo--item__title': true,
        complete: this.todo.isComplete,
        'display--none': isEdit,
      }"
      @click="handleCompleteCheck"
    >
      {{ todo.title }}
    </div>
    <input
      type="text"
      :class="{
        'todo--item__edit--input': true,
        'display--none': !isEdit,
      }"
      v-model="todoEdit.editText"
      @change="handleEditInput"
    />
    <div class="todo--item__features">
      <div
        :class="{
          'todo--item__features--edit': true,
          'display--none': isEdit,
        }"
        @click="isEdit = !isEdit"
      >
        <fa :icon="['fas', 'pen']" />
      </div>
      <div
        :class="{
          'todo--item__features--check': true,
          'display--none': !isEdit,
        }"
        @click="handleUpdate"
      >
        <fa :icon="['fas', 'check']" />
      </div>
      <div class="todo--item__features--remove" @click="handleDeleteTodo">
        <fa :icon="['fas', 'trash']" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      isEdit: false,
      todoEdit: {
        editText: "",
        todoId: this.todo.id,
      },
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "completeCheck", "updateTodo"]),

    handleDeleteTodo() {
      this.deleteTodo(this.todo.id);
    },
    handleCompleteCheck() {
      this.completeCheck(this.todo.id);
    },
    handleEditInput(evt) {
      this.todoEdit.editText = evt.target.value;
    },
    handleUpdate(evt) {
      evt.preventDefault();

      this.edit = true;

      this.updateTodo(this.todoEdit);

      this.todoEdit = {
        ...this.todoEdit,
        editText: "",
      };
      this.isEdit = false;
    },
  },
};
</script>

<style scoped>
.todo--item--wrapper,
.todo--item__features {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo--item--wrapper {
  padding: 8px 12px;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.4s;
}

.todo--item--wrapper:hover {
  background-color: #ccc;
}

[class*="todo--item__features--"] {
  margin-right: 0.75rem;
}

.todo--item__title {
  width: 100%;
}

.todo--item__features--remove {
  color: #bf1650;
}

.todo--item__features--check {
  color: #21c545;
}

.todo--item__edit--input {
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  outline: none;
  border: none;
  background-color: whitesmoke;
  text-align: center;
  transition: all 0.4s;
}

.todo--item--wrapper:hover .todo--item__edit--input {
  background-color: #ccc;
}

.complete {
  text-decoration: line-through;
}

.display--none {
  display: none;
}

@media only screen and (max-width: 400px) {
  .todo--item--wrapper {
    font-size: 1.5rem;
  }
}
</style>
