import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    test: 123,
    pass: null
  },  
  getters: {
    doneTodos: state => {
      return state.test
    },
    getPass: state => {
      return state.pass
    }
  },

  mutations: {
    increment (state, data) {
      // 变更状态
      state.test=data
    },
    changePass(state, data) {
      state.pass=data
    }
  },
  actions: {
    changeTest({ commit }, data) {
      commit('increment', data)
    },
    commitPass({ commit }, data) {
      commit('changePass', data)
    }
  }
})
