import React from 'react';
import {useCart} from './Counter';

function Products(props) {
    const Cart=useCart();
    console.log(Cart);
  return (
    <div>
    <h2>
        Product name: {props.name}
        Price: {props.price}
            </h2>
            <button onClick={()=>Cart.setitems([...Cart.items,{name:props.name,price:props.price}])}>Add to cart</button>

    </div>
  )
}

export default Products