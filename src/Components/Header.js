import {Link} from "react-router-dom";
import React from 'react';
import '../assets/css/header.css';

export default function Header(props) {

  const array = [];
  
  for (var i = 1; i < 5; i++) {
    if (i === props.page) {
      array.push("Links active");
    } else {
      array.push("Links");
    }
  }

  return (
    <>
      <div className="container">
      <div className="Logo">
          <img src={require('../assets/images/LOGO.jpg')} className='tinyLogo'></img>
        </div>
        <div className="companyName">
          <h1>School Management System</h1>
        </div>
        <div className="list">
          <ul>
          <li >
              <Link to="/students" className={array[0]}>Students</Link>
            </li>
            <li >
              <Link to="/teachers" className={array[1]}>Teachers</Link>
            </li>
            <li >
              <Link to="/classes" className={array[2]}>Classes</Link>
            </li>
            <li >
              <Link to="/fee" className={array[3]}>Fee</Link>
            </li>
            <li >
              <Link to="/" className="Links">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
