import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
function Home(){
    const navigate=useNavigate();
    return<>
        <div>
            <h1>Home Page</h1>
            <ul>
            <li><Link to="/home">Home </Link></li>
            <li> <Link to="/about">About </Link></li>
            <li> <Link to="user/anil">Anil </Link></li>
            <li> <Link to="user/rahul">Rahul </Link></li>
            <br />
            <button onClick={()=>navigate("/about")}>Go to about page</button>
            <br />
            <button onClick={()=>navigate("/filter")}>Go to Filter page</button>
            </ul>
        </div>
        </>

}
export default Home;