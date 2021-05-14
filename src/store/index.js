import { createStore } from 'vuex'
import aboData from '../data/aboData'

export default createStore({
  state: {
    aboData,
    operationData:{
      choices:[],
      result:''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
