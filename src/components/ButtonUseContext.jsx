import React, { useContext } from 'react'
import { Context } from '../TestUseContext';

export default function ButtonUseContext() {
  const [number,setNumber]=useContext(Context);
  const clickHandler=()=>{
    setNumber((prev)=>prev+1);
  }
  return (
    <button onClick={clickHandler}>Current value is {number}</button>
  )
}
