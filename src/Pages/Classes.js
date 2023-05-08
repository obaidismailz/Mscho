import React from "react";
import Table from "../Components/table";
import Header from "../Components/Header";
import FilterMenu from "../Components/FilterMenu"
import { useState } from "react";
import {Link} from "react-router-dom";
import '../assets/css/sidemenu.css'
import '../assets/css/filtermenu.css'


export default function Classes(props) {
    const [classArray, setClassArray] = useState(["classes active", "classes", "classes", "classes", "classes", "classes", "classes", "classes", "classes", "classes", "classes"]);
    const [classNumber, setClassNumber] = useState("Nursery");
    const handleClick = (data, index) => {
        setClassNumber(data);
        let array = [...classArray];
        for (var i = 0; i < 11; i++) {
            if (array[i] === "classes active") {
                array[i] = "classes"
                break;
            }
        }
        array[index] = "classes active";
        setClassArray(array);
    }
    const SideMenu = () => {
        return (
            <>
                <div className="sidelist">
                    <ul id="classesList">
                        <li className="item">
                            <a href="#" className={classArray[0]} onClick={() => { handleClick("Nursery", 0) }}>Nursery</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[1]} onClick={() => { handleClick("KG1", 1) }}>Kinder Garden 1</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[2]} onClick={() => { handleClick("KG2", 2) }}>Kinder Garden 2</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[3]} onClick={() => { handleClick("One", 3) }}>One</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[4]} onClick={() => { handleClick("Two", 4) }}>Two</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[5]} onClick={() => { handleClick("Three", 5) }}>Three</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[6]} onClick={() => { handleClick("Four", 6) }}>Four</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[7]} onClick={() => { handleClick("Five", 7) }}>Five</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[8]} onClick={() => { handleClick("Six", 8) }}>Six</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[9]} onClick={() => { handleClick("Seven", 9) }}>Seven</a>
                        </li>
                        <li className="item">
                            <a href="#" className={classArray[10]} onClick={() => { handleClick("Eight", 10) }}>Eight</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }


    return (
        <>
            <Header page={3} />
            <div className="classList">
                <SideMenu />
                <div className="students">
                    <Table tableHeader={"student"} title={classNumber} />
                </div>
                <FilterMenu/>
            </div>
        </>
    );
}