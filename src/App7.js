import React,{useState} from 'react';

function App(){
    return(
        <div>
            <h1>Higher order ocmponent</h1>
            {/* <HigherRed cmp={Counter}/>
            <HigherGreen cmp1={Counter} /> */}
            <Counter style={{backgroundColor:'Red'}}/>
            <Counter style={{backgroundColor:'Blue'}}/>
        </div>
    )

}

// function HigherRed(props){
//     return (
//         <h2><props.cmp /></h2>
//     )
// }
// function HigherGreen(props){
//     return (
//         <h2><props.cmp1 /></h2>
//     )
// }

function Counter(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}
export default App;