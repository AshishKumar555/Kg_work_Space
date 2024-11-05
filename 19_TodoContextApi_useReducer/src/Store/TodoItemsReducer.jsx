const todoItemsReducer=(currentState,action)=>{
    let newState=currentState;
    if(action.type==='ADD_ITEMS'){
      const todoText=action.payload.todoText;
      const todoDate=action.payload.todoDate;
      newState=[...currentState,{id:todoText,todoText:todoText,todoDate:todoDate}]
    }else if(action.type==='DELETE_ITEM'){
      newState=currentState.filter(item=>item.id !==action.payload.todoId)
    }
    return newState
}

export default todoItemsReducer;

// const TodoItemsReducer = (currentItems, action) => {
//   switch(action.type) {
//     case 'ADD_ITEM': {
//       const todoText = action.payload.todoText;
//       const todoDate = action.payload.todoDate;
//       return [...currentItems, { id: todoText, todoText, todoDate }];
//     }
//     case 'DELETE_ITEM':
//       return currentItems.filter(item => item.id !== action.payload.todoId);
//     default:
//       return currentItems;  
//   }
// }

// export default TodoItemsReducer;