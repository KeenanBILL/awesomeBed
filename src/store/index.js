import { createStore } from 'vuex'
import axios from 'axios'
const URL = 'https://awesomebed-tr4f.onrender.com/';


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state,values) {
      state.users = values  
    }
  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${URL}users`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results)
      } else{
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
