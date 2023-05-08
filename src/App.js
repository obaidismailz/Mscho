import React, { useState } from 'react';
import Teacher from './Pages/Teachers';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Pages/Login.js';
import Students from './Pages/Students.js';
import Fee from './Pages/Fee.js'
import Classes from './Pages/Classes';
import AddStudent from './Pages/AddStudent';

function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/teachers" element={<Teacher tableHeader={"teacher"} title={"Teachers"} />} />
          <Route exact path="/students" element={<Students tableHeader={"student"} title={"Students"}/>} />
          <Route exact path="/classes" element={<Classes tableHeader={"student"} title={"Students"}/>} />
          <Route exact path="/fee" element={<Fee tableHeader={"fee"} title={"Fee"} />} />
          <Route exact path="/addStudent" element={<AddStudent/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
