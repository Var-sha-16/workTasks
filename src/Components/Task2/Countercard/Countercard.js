import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import  "./Countercard.css"
import { decrement, increment } from '../../reducer';
function Countercard({index}) {
  // const [counter,setCounter]=useState(["counter1","counter2","counter3","counter4"])
    const count =useSelector((state)=>state.counter.counters[index]);
    const dispatch= useDispatch();
  return (
  <div>
  
 <div className='counter-card'>{"counter"(index)}<div>
 <div className='counter-card-div'>
 <button onClick={()=>dispatch(increment(index))}>+</button>
 <p>{count}</p>
 <button onClick={()=>dispatch(decrement(index))}>-</button>
 </div></div>
 </div>
    
       
    </div>
  
  )
}

export default Countercard
