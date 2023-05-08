import React, { useState } from 'react';
import { studentData } from '../assets/TempData/StudentsData';
import { teacherData } from '../assets/TempData/TeachersData';
import '../assets/css/table.css'

const tableHeaders = {
    student: ["Image", "Name", "ID", "Class", "Address", "Contact"],
    teacher: ["Image", "Name", "ID", "Class", "Details"],
    fee: ["Image", "Name", "ID", "Class", "Admission Fee", "Monthly Fee", "Pending Amount", "Paid"],
}

function TableView(props) {
    const [totalStudent,setTotalStudent] = useState(0);
    console.log("This is the props == " + props.tableHeader);
    const feeORelse = (data) => {
        if (props.tableHeader === "fee") {
            return (
                <>
                    <td>{data.name}</td>
                    <td>{data.id}</td>
                    <td>{data.class}</td>
                    <td>{data.admission}</td>
                    <td>{data.monthly}</td>
                    <td>{data.pending}</td>
                    <td>{data.paid}</td>
                </>
            );
        }
        else if (props.title === "Students") {
            return (
                <>
                    <td>{data.name}</td>
                    <td>{data.id}</td>
                    <td>{data.class}</td>
                    <td>{data.address}</td>
                    <td>{data.contact}</td>
                </>
            );
        }
        else {
            return (
                <>
                    <td>{data.name}</td>
                    <td>{data.id}</td>
                    <td>{data.address}</td>
                    <td>{data.contact}</td>
                </>
            );
        }
    }
    var flag = false;
    var count = 0;
    if (props.title !== "Students" && props.title !== "Fee")
        flag = true;
    return (
        <>
            <div className='mainContainer'>
                <h1 className='title'>{props.title} Record</h1>
                <h3 className='title' style={{marginBottom:"10px"}}>Total Students {count}</h3>
                <div className='tableContainer'>
                    <table>
                        <thead>
                            <tr>
                                {tableHeaders[props.tableHeader].map((header, key) => {
                                    if (header === "Class") {
                                        if (props.title === "Students" || props.title === "Fee") {
                                            return (
                                                <th key={key} >{header}</th>
                                            );
                                        }
                                        else {
                                            return (
                                                <></>
                                            );
                                        }
                                    }
                                    else {
                                        
                                        return (
                                            <th key={key} >{header}</th>
                                        );
                                    }
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.map((row, key) => {
                                if (flag) {
                                    if (row[1].class === props.title) {
                                        count++;
                                        console.log("Count == " + count);
                                        return (
                                            <tr key={key}>
                                                {row.map((data, key) => {
                                                    if (typeof data === 'object') {
                                                        return (
                                                            feeORelse(data)
                                                        );
                                                    }
                                                    else {
                                                        return (
                                                            <td key={key}>
                                                                <img src={require("../assets/images/pic.png")} className='logoPic'></img>
                                                            </td>
                                                        );
                                                    }
                                                })}
                                            </tr>
                                        );
                                    }
                                    else {
                                        return (
                                            <></>
                                        );
                                    }
                                    
                                }
                                else {
                                    return (
                                        <tr key={key}>
                                            {row.map((data, key) => {
                                                if (typeof data === 'object') {
                                                    return (
                                                        feeORelse(data)
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <td key={key}>
                                                            <img src={require("../assets/images/pic.png")} className='logoPic'></img>
                                                        </td>
                                                    );
                                                }
                                            })}
                                        </tr>
                                    );
                                }

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

function CardView() {
    return (
        <div className='mainContainer'>
            <h1 className='title'>Teachers Record</h1>
            <div className='cardContainer'>
                {teacherData.map((row, key) => {
                    return (
                        <div className='row'>
                            {row.map((data, key) => {

                                if (typeof data === 'object') {
                                    return (
                                        <div className='col'>
                                            <h3 style={{ marginBottom: "10px" }}>{data.name}</h3>
                                            <p >Class: {data.class}</p>
                                            <p >ID: {data.id}</p>
                                            <p>Address: {data.address}</p>
                                            <p>Contact: {data.contact}</p>
                                        </div>
                                    );
                                }
                                else if (data === "Details") {
                                    return (
                                        <div className='emptyDiv'>

                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div className='imageDiv'>
                                            <img src={require('../assets/images/pic.png')} className='tinyPic'></img>
                                        </div>
                                    );
                                }
                            })}
                        </div>);
                })}

            </div>
        </div>
    );
}

export default function Table(props) {
    function tableORcard(type) {
        if (type.tableHeader === "teacher")
            return (<CardView />);
        else
            return (<TableView tableHeader={type.tableHeader} title={type.title} />);
    }

    return (
        tableORcard(props)
    );
}