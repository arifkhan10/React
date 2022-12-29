import { useState } from "react";

function App(){
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [mobile,setMobile]=useState("");

function saveUser(){
    console.warn(name,email,mobile);
}

return(
    <div className="App">
        <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} name="name"></input><br />
        <input type="text" value={email}  onChange={(e)=>{setEmail(e.target.value)}} name="email"></input><br />
        <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}  name="mobile"></input><br />
        <button type="button" onClick={saveUser}>Save User</button>

    </div>
)


}
export default App;