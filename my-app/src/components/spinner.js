import React from 'react'
import loading from '../loader.gif';

const spinner =()=> {
  
    return (
      <div className='text-center' style={{width: "21.9%", size:"30px"}}>
        <img src={loading}  alt="loading" className='me-3 ms-3'/>
      </div>
    ) 
}

export default spinner