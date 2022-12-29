import React,{useRef} from 'react';
function App(){
    let inputRef=useRef("null");
    let inputRef1=useRef("null");
   
    function submitForm(e){
e.preventDefault();
let inputRef2=document.getElementById("check").value;
console.warn("value1",inputRef.current.value)
console.warn("value1",inputRef1.current.value)
console.warn("value2",inputRef2)
    }
    return(
        <div>
            <h1>Uncontrolled</h1>
            <form onSubmit={submitForm}>
                <input type="text" ref={inputRef}></input> <br></br><br></br>
                <input type="text" ref={inputRef1}>
                </input> <br></br><br></br>
                <input type="text" id="check"></input>
                <button>Done</button>
            </form>
        </div>
    )

}
export default App;