 const todoStore = {
    state: {
        todoList: [
          {
            id: 1,
            title: "lorem isComplete",
            isComplete: false,
          },
          {
            id: 2,
            title: "fuck a girl",
            isComplete: false,
          },
          {
            id: 3,
            title: "do bull shit things",
            isComplete: false,
          },
        ],
      },
      getters: {
        getAllTodos: (state) => state.todoList,
        getIsCompleteTodos: (state) =>
          state.todoList.filter((item) => item.isComplete == true),
      },
      actions: {
        addingTodo({ commit }, todo) {
          commit("ACT_ADD_TODO", todo);
        },
        deleteTodo({ commit }, todoId) {
          commit("ACT_DELETE_TODO", todoId);
        },
        completeCheck({ commit }, todoId) {
          commit("ACT_COMPLETE_CHECK", todoId);
        },
        updateTodo({ commit }, { todoId, editText }) {
          commit("ACT_UPDATE_TODO", { todoId, editText });
        },
      },
      mutations: {
        ACT_ADD_TODO(state, todo) {
          state.todoList = [...state.todoList, todo];
        },
        ACT_DELETE_TODO(state, todoId) {
          state.todoList = state.todoList.filter((item) => item.id !== todoId);
        },
        ACT_COMPLETE_CHECK(state, todoId) {
          state.todoList = state.todoList.map((item) => {
            if (todoId === item.id) item.isComplete = !item.isComplete;
    
            return item;
          });
        },
        ACT_UPDATE_TODO(state, { todoId, editText }) {
          state.todoList = state.todoList.map((item) => {
            if (todoId === item.id) {
              if (!editText) return item;
              else item.title = editText;
            }
    
            return item;
          });
        },
      },
 }

 export default todoStore