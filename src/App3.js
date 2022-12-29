import React,{createRef} from 'react'
class App extends React.Component{
    constructor()
    {
        super();
        this.inputRef=createRef();
    }

getVal(){

    this.inputRef.current.style.color="red";
    this.inputRef.current.style.backgroundColor="black"
}

render()
{
    return(
        <div>
        <h1>Create Ref</h1>
        <input text="input" ref={this.inputRef}></input>
        <button onClick={()=>this.getVal()}>class Ref</button>
        </div>
    )
}



}
export default App;
