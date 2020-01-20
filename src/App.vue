<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'; // 파일 불러오기
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
// var my_cmp = {
//     templeate : <div>my component</div>
// };
// new Vue({
//     el: '',
//     components : {
//         //'컴포넌트 이름' : '컴포넌트 내용',
//         'my-cmp' : my_cmp
//     }
// });
export default {
  components:{
    TodoHeader,// 'TodoHeader' = TodoHeader
    TodoFooter,
    TodoInput,
    TodoList
  }
}
</script>

<style>
body{
    text-align: center;
    background-color: #F6F6F6;

}
input{
    border-style:groove;
    width:200px;
}
button{
    border-style:groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.2);
}
</style>
