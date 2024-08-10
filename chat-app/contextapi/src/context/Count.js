import React, { createContext, useState } from 'react'
export const CountContext=createContext();

export const CountProvider=(props)=>{
    const [count, setcount] = useState(0);
   return (
     <CountContext.Provider value={{count,setcount}}>
        {props.children}
    </CountContext.Provider>
   )
}
export default CountContext;