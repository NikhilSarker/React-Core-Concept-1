import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  
// const handleClick1 = () =>{
//   alert("one btn clicked!");
// }
// const handleClick2 = (num) =>{
//   alert(num + 2);
// }



  return (
    <>      
      <h3> React Core concepts</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>




      {/* <button onClick={handleClick1}>one</button>
      <button onClick={()=>alert('two btn clicked!')}>two</button>
      <button onClick={()=>handleClick2(5)}>three</button> */}
      
    </>
  )
}

export default App
