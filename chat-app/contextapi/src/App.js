import { useReducer } from 'react';
function App() {
  const reduce=(state,action)=>{
    switch(action.type){
      case 'addtodo':{
        return {
          ...state,
          name:state.name +'aa'
        }
      }
      default:
        return{
          ...state
        }
      
    }
      
  }
  const [state, dispatch] = useReducer(reduce, {name:'ankit'})
  return (
   
      <>
      <input type='text' placeholder='Name'   />
      <button onClick={()=>dispatch({type:'addtodo'})}>add</button>
      Name: {state.name}

      </>
  );
}

export default App;
