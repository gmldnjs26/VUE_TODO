import Vue from 'vue';
import Vuex from 'vuex';
//import * as mutations from './mutations.js';
import todoApp from './modules/todoApp.js'

Vue.use(Vuex);// vue 를 사용하는 global적으로 사용한다는 말

export const store = new Vuex.Store({
  //앱이 비대해져서 1개의 store로는 관리가 힘들 때, modules 속성 사용
  modules:{
    todoApp: todoApp
  }
});
// const storage = {
//   fetch(){
//     const arr = [];
//     if(localStorage.length > 0){
//       for(let i = 0; i < localStorage.length; i++){
//         if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     }
//     return arr;
//   },
// };

// export const store = new Vuex.Store({
//   state: { // import 만 하면 전역적으로 쓰일수 있는 느낌이다.
//     todoItems: storage.fetch()
//   },
//   getters: {
//     storedTodoItems(state){
//       return state.todoItems;
//     }
//   },
//   mutations: mutations
// });


