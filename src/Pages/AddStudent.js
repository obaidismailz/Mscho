import React from "react";
import Header from "../Components/Header";
import { useState } from "react";
import axios from 'axios'
import '../assets/css/addstudent.css'

export default function AddStudent() {
    const [studentData, setStudentData] = useState({
        //image:null,
        name: '',
        fname: '',
        id: '',
        clas: '',
        contact: 0,
        address: '',
        adfee: 0,
        mfee: 0
    });
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
                /*setStudentData(prevInput => {
                    return{
                        ...prevInput,
                        ['image']: reader.result
                    }
                });*/
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    function handelOnSubmit(event) {
        event.preventDefault();
        const newStudent = {
            name: studentData.name,
            fname: studentData.fname,
            id: studentData.id,
            clas: studentData.clas,
            contact: studentData.contact,
            address: studentData.address,
            adfee: studentData.adfee,
            mfee: studentData.mfee
        }
        
        /*axios.post('http://localhost:3001/addStudent', newStudent).then(() => {
            console.log("POSTED");
        }).catch(() => {
            console.log("L LAGAYE");
        });*/
        alert("Successfully added student " + studentData.name);
    }
    function handelChange(event) {
        const { name, value } = event.target;
        setStudentData(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }
    return (
        <>
            <Header />
            <div className="addStudentContainer">
                <h1 style={{ textAlign: "center" }}>Enter Student Info</h1>
                <form onSubmit={handelOnSubmit}>
                    <div className="addStudentForm">
                        <div className="imageContainer">
                            <img id="blah" src={imgData} className="studentImage">
                            </img>
                            <label for="studentimage" className="uploadButton" style={{ marginTop: "66px" }}>
                                Upload image
                                <input type="file" accept="Image/*" id="studentimage" name="image" className="sImage" onChange={onChangePicture}></input>
                            </label>
                        </div>
                        <div className="dataContainer">
                            <label for="name">
                                <p>Full Name</p>
                                <input type="text" className="inputs" name="name" onChange={handelChange} value={studentData.name} required></input>
                            </label>
                            <label for="fname">
                                <p>Father Name</p>
                                <input type="text" className="inputs" name="fname" onChange={handelChange} value={studentData.fname} required></input>
                            </label>
                            <label for="id">
                                <p>Roll Number</p>
                                <input type="text" className="inputs" name="id" onChange={handelChange} value={studentData.id} required></input>
                            </label>
                            <label for="clas">
                                <p>Class</p>
                                <select type="text" className="inputs" name="clas" onChange={handelChange} value={studentData.class} required>
                                    <option value="Nursery">Nursery</option>
                                    <option value="KG1">Kinder Garden 1</option>
                                    <option value="KG2">Kinder Garden 2</option>
                                    <option value="One">One</option>
                                    <option value="Two">Two</option>
                                    <option value="Three">Three</option>
                                    <option value="Four">Four</option>
                                    <option value="Five">Five</option>
                                    <option value="Six">Six</option>
                                    <option value="Seven">Seven</option>
                                    <option value="Eight">Eight</option>
                                </select>
                            </label>
                            <label for="contact">
                                <p>Contact</p>
                                <input type="number" className="inputs" name="contact" onChange={handelChange} value={studentData.contact} required></input>
                            </label>
                            <label for="address">
                                <p>Address</p>
                                <input type="text" className="inputs" name="address" onChange={handelChange} value={studentData.address} required></input>
                            </label>
                            <label for="adfee">
                                <p>Admission Fee</p>
                                <input type="number" className="inputs" name="adfee" onChange={handelChange} value={studentData.adfee} required></input>
                            </label>
                            <label for="mfee">
                                <p>Monthly Fee</p>
                                <input type="number" className="inputs" name="mfee" onChange={handelChange} value={studentData.mfee} required></input>
                            </label>
                            <button type="submit" className="submitButton">Add Student</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}