import { useSearchParams } from "react-router-dom";

function Filter(){
const [searchParams,setSearchParams]=useSearchParams();
console.warn(searchParams.get("age"));
const age=searchParams.get("age");
    return(
        <div>
            <h1>Filter Page</h1>
            <h3>Age is: {age}</h3>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})}  placeholder="type something"></input>
            <button onClick={()=>setSearchParams({age:40})}>Filter</button>
        </div>
    )
}
export default Filter;