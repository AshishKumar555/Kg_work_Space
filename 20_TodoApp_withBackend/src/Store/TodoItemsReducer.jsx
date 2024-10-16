const todoItemsReducer=(currentState,action)=>{
    let newState=currentState;
    if(action.type=='ADD_ITEMS'){
      // const id=action.payload.id;
      // const todoText=action.payload.todoText;
      // const todoDate=action.payload.todoDate; -----OR-------
      const {id,todoText,todoDate}=action.payload;

      newState=[...currentState,{id:id,todoText:todoText,todoDate:todoDate}]
    }else if(action.type==='DELETE_ITEM'){
      newState=currentState.filter(item=>item.id !==action.payload.todoId)
    }else if(action.type === 'LOAD_ALL_ITEMS'){
      newState=action.payload.allItems;
    }
    return newState
}

export default todoItemsReducer;

// const TodoItemsReducer = (currentItems, action) => {
//   switch(action.type) {
//     case 'ADD_ITEM': {
//       const {id, todoText, todoDate} = action.payload;
//       return [...currentItems, { id, todoText, todoDate }];
//     }
//     case 'DELETE_ITEM':
//       return currentItems.filter(item => item.id !== action.payload.todoId);
//     case 'LOAD_ALL_ITEMS':
//       return action.payload.allItems;
//       default:
//       return currentItems;  
//   }
// }

// export default TodoItemsReducer;