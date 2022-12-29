import React from 'react';
import { Params, useParams } from 'react-router-dom';
function User(){
const Params=useParams();
const {name}=Params;
console.warn(name);
    return(
        <div>
            <h1>This is {name}'s page</h1>
            

        </div>
    )
}
export default User;