import React from "react";
import add from "./addButton.module.css"

const AddButton = () => {
    return(
        <div className={add.conteiner}>
            <button className={add.button}>add</button>
        </div>
    );
}


export default AddButton;