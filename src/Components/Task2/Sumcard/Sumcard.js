import React from 'react'
import "./Sumcard.css"
import { useSelector } from 'react-redux'
function Sumcard() {
  const sum=useSelector((state)=> state.sum)
  return (
      <button>Sum:{sum}</button>
    
  )
}

export default Sumcard
