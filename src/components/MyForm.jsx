import { useState } from "react"



export default function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phNum, setPhNum] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhNum(e) {
    setPhNum(e.target.value);
  }


  return (
    <div className="form-container">
      <h1>Register</h1>
      <form action="">
        <label htmlFor="">
          Email address : 
          <input type="email" value={email} onChange={handleEmail} required/>
        </label><br />
        <label htmlFor="">
          Firstname :
          <input type="text" value={firstName} onChange={handleFirstName} required/>
        </label><br />
        <label htmlFor="">
          Lastname : 
          <input type="text" value={lastName} onChange={handleLastName} required/>
        </label><br />
        <label htmlFor="">
          Phone Number : 
          <input type="text" value={phNum} onChange={handlePhNum} pattern="[0-9]{10}" required/>
        </label><br />
        <label htmlFor="">
          Password : 
          <input type="password" required/>
        </label><br />
        <button onSubmit={(e) => {
          // alert(e)
        }}>Submit</button>
      </form>
    </div>
  )
}