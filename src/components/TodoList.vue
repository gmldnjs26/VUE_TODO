<template>
    <div>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" v-on:click="toggleComplete({todoItem,index})"></i>
          <!--textCompleted 속성이 todoItem.completed 가 true 일때 적용시키겠다. -->
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn">
            <i class="fas fa-trash-alt" v-on:click="removeTodo({todoItem,index})"></i>
          </span>
        </li>
      </transition-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations({
      removeTodo: 'removeOneItem', // parameter들은 자동으로 넘어감
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo(todoItem,index){
    //   this.$store.commit('removeOneItem',{todoItem,index});
    // },
    // toggleComplete(todoItem,index){
    //   this.$store.commit('toggleOneItem',{todoItem,index});
    // }
  },
  computed: { 
    // todoItems(){
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems']) // 배열 literal
    // ...mapGetters({ // 객체 literal todoItems로 명명하고 싶을 때,
    //   todoItems:'storedTodoItems'
    // })
  }
}
</script>

<style scoped> /*해당 컴포넌트만 스타일 적용하겠다.*/ 
ul{
  list-style-type: none; /* 점 없애기 */
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height :50px;
  height: 50px;
  line-height : 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color:#62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color:#b3adad;
}
.textCompleted{
  /* 완료일시 줄 긋기 */
  text-decoration: line-through; 
  color:#b3adad;
}
.removeBtn{
  margin-left:auto;
  color:#de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-item{
  display:inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

</style>