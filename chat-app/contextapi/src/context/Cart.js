import React from 'react'
import { useCart} from './Counter';


function Cart() {
    const cart =useCart();
    const total=cart.items.reduce((a,b)=>a + + b.price, 0)
  return (
    <div>
        Products:{ cart && cart.items.map(item=><li key={item.name}>{item.name} -${item.price}</li>)}
    <h3>
        Total Price:{total}
    </h3>
    </div>
  )
}

export default Cart