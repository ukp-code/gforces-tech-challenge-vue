import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
  },
  getters: {
    books: state => state.books,
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Stephen+King%22');
        commit('SET_BOOKS', response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_BOOKS(state, books) {
      // eslint-disable-next-line no-param-reassign
      state.books = books;
    },
  },
});
