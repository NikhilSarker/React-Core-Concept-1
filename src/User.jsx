export default function User({user}){
  console.log(user);
  const {name, email, phone} = user;
  const userStyle ={
    border: '2px solid purple',
    borderRadius:'10px',
    padding:"10px",
    margin:"10px",
  }
  return (
    <div style={userStyle}>
      <h3>User Name: {name}</h3>
      <h3>User Email: {email}</h3>
      <h3>User Phone: {phone}</h3>
    </div>
  )
}