import React from "react";
import Table from "../Components/table";
import Header from "../Components/Header";

export default function Teacher(props)
{
    return(
        <>
            <Header page={2}/>
            <Table tableHeader={props.tableHeader} title={props.title}/>
        </>
    );
}