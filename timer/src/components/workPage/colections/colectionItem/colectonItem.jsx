import React from "react";
import ci from "./colectionItem.module.css"

const ColectionItem = (props) => {
    return (
        <div className={ci.conteiner}>
            <div className={ci.item}>
                <a href="#" className={ci.name}>{props.value}</a><a href="#" className={ci.delete}>X</a>
            </div>
            
            
        </div>
    );
}


export default ColectionItem;