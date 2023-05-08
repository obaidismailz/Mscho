import React from "react";
import Table from "../Components/table";
import Header from "../Components/Header";

export default function Fee(props)
{
    return(
        <>
            <Header page={4}/>
            <Table tableHeader={props.tableHeader} title={props.title}/>
        </>
    );
}