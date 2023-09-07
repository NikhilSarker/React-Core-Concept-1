import { useState } from "react";

export default function Team(){
  const [team, setTeam] = useState(11);

  const handleAdd = () =>{
    setTeam(team + 1);

  }
  const handleReduce = () =>{
    setTeam(team - 1);

  }
  return (
    <div style={{border:'2px solid red'}}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}