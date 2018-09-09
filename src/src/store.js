import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  msg: '',
  time: 0,
  status: undefined,
  color: '#8e71c7',
  dialogVisible: false,
  content: '',
  number: Math.round(Math.random() * 10 + 1),
  types: ''
}
//包含多个更新state函数的对象
const mutations = {
  //增加的mutation
  timer(state) {
    let t = setInterval(() => {
      state.time += 1
      if (state.time == 100) {
        clearInterval(t)
        state.status = 'success'
        state.color = '#67C23A',
          state.dialogVisible = true;
      }
    }, 1000 / 10)
  },
  close(state, payload) {
    state.dialogVisible = false
    state.content = payload.msg
    if (state.number == state.content) {
      state.types = 'right'
    } else {
      state.types = 'wrong'
      state.dialogVisible = true
    }
    setTimeout(() => {
      if (state.types == 'wrong') {
        state.types = ''
      }
    }, 1000)
  }

}
//包含多个对应事件的函调函数的对象
const actions = {
  timer({commit}) {
    commit('timer')
  },
  close({commit}, msg) {
    commit('close', {msg})
  }
}
//包含多个getter计算属性的对象
const getters = {}

export default new Vuex.Store({
  state,//状态
  mutations,
  actions,
  getters
})
