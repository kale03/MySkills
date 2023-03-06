import React from "react";
import ColectionItem from "../colectionItem/colectonItem";
import colections from "./colections.module.css"

const Colections = () =>{
    return(
        <div className={colections.container}>
            <div className={colections.title}>colections <a href="/addColecion" className={colections.addLink}>+</a></div>
            <ColectionItem value ="Colection 1" />
            <ColectionItem value ="Colection 2"/>
            <ColectionItem value ="Colection 3"/>
            <ColectionItem value ="Colection 4"/>
        </div>
    );
}

export default Colections