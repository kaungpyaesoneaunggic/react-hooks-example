import React, { useState, useTransition } from 'react';

function TestUseTransition() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition()


  // problem
  // function handleChange(e) {
  //   setName(e.target.value)
  //     const l=[]
  //     for(let i=0; i<10000;i++){
  //       l.push(e.target.value)
  //     }
  //     setList(l)
  // }

  // solution
  function handleChange(e) {
    setName(e.target.value)
    startTransition(() => {
      const l=[]
      for(let i=0; i<100000;i++){
        l.push(e.target.value)
      }
      setList(l)
    })
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item,index) => <div key={index}>{item}</div>)
      )}
    </>
  );
}

export default TestUseTransition;