import React, { useEffect, useState } from 'react'
import { Provider } from "react-redux";
import Countercard from './Countercard/Countercard';
import ResetButton from './ResetButton/ResetButton';
import Sumcard from './Sumcard/Sumcard';
import "./Task2.css"
function Task2() {
    const [titleVisible,setitleVisible]=useState(false);
    useEffect(()=>{
        const timer =setTimeout(()=>{
setitleVisible(true);
},3000)
return()=>clearTimeout(timer)
    },[]);
  return (
    <Provider store={store}>
    <div className='content'>
        {titleVisible&& <h1>page title</h1>}
        <Countercard index={0}/>
        <Countercard index={1}/>
        <Countercard index={2}/>
        <Countercard index={3}/>
        <ResetButton/>
       
        <Sumcard/>
          </div>
          </Provider>
  )
}

export default Task2 
