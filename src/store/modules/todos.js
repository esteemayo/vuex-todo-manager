import * as todoService from '@/services/todoService';

const todos = {
  state: () => ({
    todos: [],
  }),
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    newTodo(state, payload) {
      state.todos.unshift(payload);
    },
    removeTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    updTodo(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.todos.splice(index, 1, payload);
      }
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const { data } = await todoService.getAllTodos();

      commit('setTodos', data);
    },
    async addTodo({ commit }, payload) {
      const { data } = await todoService.createTodo(payload);

      commit('newTodo', data);
    },
    async deleteTodo({ commit }, payload) {
      await todoService.destroyTodo(payload);

      commit('removeTodo', payload);
    },
    async filterTodos({ commit }, e) {
      //   get selected number
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );

      const { data } = await todoService.getLimitedTodos(limit);

      commit('setTodos', data);
    },
    async updateTodo({ commit }, payload) {
      const { data } = await todoService.editTodo(payload, payload.id);
      commit('updTodo', data);
    },
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
};

export default todos;
