const todoItemsReducer=(currentState,action)=>{
    let newState=currentState;
    if(action.type=='ADD_ITEMS'){
      const todoText=action.payload.todoText;
      const todoDate=action.payload.todoDate;
      newState=[...currentState,{id:todoText,todoText:todoText,todoDate:todoDate}]
    }else if(action.type==='DELETE_ITEM'){
      newState=currentState.filter(item=>item.id !==action.payload.todoId)
    }
    return newState
}

export default todoItemsReducer;