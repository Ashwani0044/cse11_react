import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{padding:"10px", background: "aliceblue"}}>

        <Link to="/" style={{margin: "10px"}}>HOME</Link>
        <Link to="/about" style={{margin: "10px"}}>ABOUT</Link>
        <Link to="/contact" style={{margin: "10px"}}>CONTACT</Link>
      
    </nav>
  )
}

export default Navbar;
