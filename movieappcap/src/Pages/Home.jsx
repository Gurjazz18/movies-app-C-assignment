import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

  return (
    <div style={{display:"flex",
    justifyContent:"space-evenly",
    paddingTop:"20px",fontSize:"20px"}}>

      <Link to="/login">Login</Link>
      <Link to="/signup">signup</Link>
         
    </div>
  )
}

export default Home
