import React, { useId } from 'react'

export default function InputForm() {
  // This is the easiest one XD
  // problem
  // return (
  //   <div>
  //     <label htmlFor='labelId'>I am a label</label>
  //     <input id='labelId' type='text' value='this is the value'></input>
  //   </div>
  // )


  // solution
  const id=useId();
   return (
    <div>
      <label htmlFor={id}>I am a label</label>
      <input id={id} type='text' value='this is the value'></input>
    </div>
  )
}
