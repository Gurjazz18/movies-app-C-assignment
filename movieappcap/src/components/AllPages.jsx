import React from 'react'
import {

    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home';
import Favorites from '../Pages/Favorites';
import Movies from '../Pages/Movies';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import WatchList from '../Pages/WatchList';
import SingleMovie from '../Pages/SingleMovie';

const AllPages = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          
          <Route path="/fav" element={<Favorites/>} />
          <Route path="/watch" element={<WatchList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
      
         
          <Route path="/:id" element={<SingleMovie/>} />
      
    </Routes>
  )
}

export default AllPages
