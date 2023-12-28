import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

function Navbar() {
  return (
    <nav id='nav1' className='navbar'> 
    <div className='nav-item'>
        <Link to="/home">Home</Link>
      </div>
      <div className='nav-item'>
        <Link to="/user">User</Link>
      </div>
      <div className='nav-item'>
        <Link to="/event">Event</Link>
      </div>
     
      <div className='nav-item'>
        <Link to="/Idea">Idea</Link>
      </div>
      
      <div className='nav-item'>
        <Link to="/Store">Store</Link>
      </div>
      <div className='nav-item'>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
