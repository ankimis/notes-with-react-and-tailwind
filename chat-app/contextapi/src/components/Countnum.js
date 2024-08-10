import React,{useContext} from 'react'
import {CountContext} from '../context/Count';


function Count() {
    const count=useContext(CountContext);
    console.log(count.count);
  return (
    <div>count: {count.count}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    <button onClick={()=>count.setcount(count.count + 1)}>add</button> 
    <button onClick={()=>count.setcount(count.count - 1)}>Decrese</button> 
    </div>
  )
}

export default Count