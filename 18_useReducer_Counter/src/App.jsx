import { useState } from 'react'
import {useReducer,useRef} from 'react'

const counterReducer=(currentState,action)=>{
  let newState=currentState;
  if(action.type==='INCREMENT'){
    newState +=1
  }else if(action.type ==='DECREMENT'){
    newState -=1
  }else if(action.type ==='DOUBLE'){
    newState *=2;
  }else if(action.type ==='RESET'){
    newState =0;
  }else if(action.type ==='CHANGEBY'){
    newState =newState +Number(action.payload.num)
  }
  return newState;

}

function App() {
  // const [count, setCount] = useState(0)
  const changebyInput=useRef();
  const initialState=0;

  const [counterVal,counterDispatch]=useReducer(counterReducer,initialState)

  const handleIncrement=()=>{
    // setCount(currentval=>currentval+1)
    counterDispatch({
      type:'INCREMENT'
    });
    
  }
  const handleDecrement=()=>{
    // setCount(currentval=>currentval-1)
    counterDispatch({
      type:"DECREMENT"
    });

  }

  const handleChangeBy=()=>{
    const num=changebyInput.current.value;
    changebyInput.current.value=0
    counterDispatch({
      type:'CHANGEBY',
      payload:{ num}
      
    })
  }


  return (
    <center>
      <h1>Counter value : {counterVal}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={()=>counterDispatch({type:'RESET'}) }>Reset</button>
      <button onClick={()=>counterDispatch({type:'DOUBLE'}) }>Double</button>
      <button onClick={handleChangeBy}>Change By</button>
      <input type="text" ref={changebyInput} placeholder={"Enter a number"} />

    </center>
  )
}

export default App
