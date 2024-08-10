import { createContext, useContext, useState} from 'react'

export const CounterContext = createContext(null);
export const useCart=()=>{
    const Cart=useContext(CounterContext);
    return Cart;
}

export const  CounterProvider=(props)=>{
    const [items, setitems] = useState([]);
    return (
        <CounterContext.Provider value={{items,setitems}}>
            {props.children}
        </CounterContext.Provider>
    )
}