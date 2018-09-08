import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
   count:0,
   msg:'',
   time:0
}
//包含多个更新state函数的对象
const mutations = {
  //增加的mutation
   timer(state){
    let t = setInterval(()=>{
          state.time += 1
      if(state.time == 100){
        clearInterval(t)
      }
     },1000/4)
   }
}
//包含多个对应事件的函调函数的对象
const actions = {
  timer({commit}){
    commit('timer')
  },
   add({commit,state}){//注意，此处如果需要state，那么commit可以传入一个state
     //提交一个mutation,传入名称
     commit('ADD')
   }
}
//包含多个getter计算属性的对象
const getters = {

}

export default new Vuex.Store({
  state,//状态
  mutations,
  actions,
  getters
})
