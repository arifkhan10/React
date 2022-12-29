import React,{useRef} from 'react';
function App(){
let inputRef=useRef(null);
function handleRef(){
// inputRef.current.value='1000'
// inputRef.current.focus();
}
    return(
        <div>
        <h1>UseRef</h1>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleRef}>UseRef</button>
        </div>
    )
}
export default App