import React,{useState} from 'react';
function App(){
const [val,setValue]=useState("000")

    return(
        <div>
            <input type="text" value={val} onChange={(e)=>setValue(e.target.value)}></input>
        <h3>{val}</h3>
        </div>
    )

}
export default App