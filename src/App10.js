import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Error from './Error';
import User from './component/User';
import { Params } from 'react-router-dom';
import Filter from './component/Filter';
import NavBar from './component/NavBar';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
import Login from './component/Login';
import Protected from './component/Protected';

function App(){

return(
    <div className='App'>
        <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<Protected Component={Home} />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            {/* <Route path="/*" element={<Error />}></Route> */}
            <Route path="/user/:name" element={<User />}></Route>
            <Route path="/filter" element={<Filter />}></Route>
            <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />}></Route>
            <Route path="channel" element={<Channel />}></Route>
            <Route path="other" element={<Other />}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
)

}
export default App;