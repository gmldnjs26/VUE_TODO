
const addOneItem = (state,todoItem) => {
  const obj = {completed:false, item:todoItem};
  // let 보다 const 가 오버라이딩이 안되서 좀더 안정적인 느낌이 있다.
  localStorage.setItem(todoItem,JSON.stringify(obj)); // add 이부분은 todoItem이 아직 text 객체가 아니다
  state.todoItems.push(obj); // mutations 에서 state에 접근하는방법
  console.log(this.todoItems);
}
const removeOneItem = (state,payload) => {
  console.log(payload.todoItem,payload.index);
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index,1);
}
const toggleOneItem = (state,payload) => { // 여기서 가져온 todoItem은 객체
  // Component 간의 사이를 좀더 명확하게 하기 위해
  console.log(payload.todoItem, payload.index);
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 
  localStorage.removeItem(payload.todoItem);
  localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems =[];
}

export {addOneItem, removeOneItem,toggleOneItem,clearAllItems} 