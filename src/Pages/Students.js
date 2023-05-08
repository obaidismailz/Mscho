import React from "react";
import Table from "../Components/table";
import Header from "../Components/Header";

export default function Students(props)
{
    return(
        <>
            <Header page={1}/>
            <Table tableHeader={props.tableHeader} title={props.title}/>
        </>
    );
}