import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    SearchHistoryList: []

  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setSearchHistoryList (state, payload) {
      let arr = state.SearchHistoryList
      arr.unshift(payload)
      arr = [...new Set(arr)]
      state.SearchHistoryList = arr
    },
    // 根据索引删除一个
    delHistory (state, index) {
      state.SearchHistoryList.splice(index, 1)
    },
    // 删除所有
    delAllHistory (state) {
      state.SearchHistoryList = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
