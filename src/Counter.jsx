import { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);
  const add =()=>{
    const newCount = count + 1;
    setCount(newCount);

  }
  const reduce =()=>{
    const newCount = count - 1;
    setCount(newCount);

  }

  const counterStyle ={
    border:'1px solid blue',
    margin:'10px',
    padding: '10px',
    borderRadius: '10px'

    

  }
  return (
    <div style={counterStyle}>
      <h3>Counter: {count}</h3>
      <button onClick={add}>Add</button>
      <button onClick={reduce}>Reduce</button>
    </div>
  );
}