import React from "react";
import {Link} from "react-router-dom";

export default function FilterMenu() {
    return (
        <div className="addStudent">
            <h1>Add Student</h1>
            <p>To add a new student click on the button below.</p>
            <Link to="/addStudent" className="view">Add</Link>
        </div>
    );
}