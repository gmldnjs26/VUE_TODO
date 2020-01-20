import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);// vue 를 사용하는 global적으로 사용한다는 말

export const store = new Vuex.Store({
  state: {
    price:100
  },
  getters: {
    originalPrice(state){
      return state.price;
    },
    doublePrice(state){
      return state.price*2;
    },
    tripplePrice(state){
      return state.price*3;
    }
  }
});