import React, { useState } from "react";
import ButtonUseContext from "./components/ButtonUseContext";

// This is used to share the value between the child and the parent
export const Context = React.createContext();
export default function TestUseContext() {
  const [number, setNumber] = useState(0);
  return (
    <Context.Provider  value={[number,setNumber]}>
      <div>Number called using UseContext :{number}</div>  
      <ButtonUseContext/>
    </Context.Provider>
  );
}
