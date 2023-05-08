import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/login.css'

export default function Login() {
    let navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        navigate("/students");
    }
    return (
        <>
            <div className="loginContainer">
                <div className="simpleContainer">
                    <div>
                        <img src={require('../assets/images/LOGO.jpg')} className='companyLogo'></img>
                    </div>
                    <div className="Name">
                        <h1 style={{ textAlign: "center", color: "white" }}>School Management System</h1>
                    </div>
                </div>
                <div className="formContainer">
                    <h1 style={{margin:"24px"}}>Login</h1>
                    <form onSubmit={handleClick}>
                        <div className="inputBox">
                            <label className="labels" for="email">Email</label>
                            <input className="inputs" type="text" name="email" placeholder="****@****.com" required></input><br></br>
                        </div>
                        <div className="inputBox">
                            <label className="labels" for="password">Password</label>
                            <input className="inputs" type="password" name="password" placeholder="password" required></input>
                        </div>
                        <div>
                            <button type="submit" className="buttons">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}