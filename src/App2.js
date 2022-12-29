import logo from './logo.svg';
import './App.css';
import User from './User';
import React, { useState,useMemo } from 'react';

function App(){

const [count,setCount]=useState(0)
const [item,setItem]=useState(10);

const useMemodemo=useMemo(function multicount()
    {
        console.log("checking")
        return count*5;
    },[count]
)

return(
    <div className='App'>
     <h1>Count {count}</h1>
     <h2>Item {item}</h2>
     <h2>
        {useMemodemo}
     </h2>
     <button onClick={()=>setCount(count+1)}>Update count</button>
     <button onClick={()=>setItem(item +1)}>Update item</button>
     </div>
)
}
export default App;