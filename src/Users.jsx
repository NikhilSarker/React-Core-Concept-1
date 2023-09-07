import { useEffect, useState } from "react"
import User from "./User";

export default function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => setUsers(data));

  },[])
  

  return (
    <div>
      <h3>Users: {users.length}</h3>
      
      {
        users.map(user => <User user={user}></User>)
      }
    </div>
  )
}

/*
1. useState to hold the data.
2. useEffect with dependency array.
3. use fetch to load data.
4. set loaded data to the state.
5. display the data.

*/