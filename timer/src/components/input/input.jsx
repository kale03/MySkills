import React from "react";
import input from "./input.module.css"

const Input = (props) => {
    return (
        <div className={input.conteiner}>
            <div className={input.hoursInput}>
                <div className={input.inputBox} id='hoursInput'>
                    <input type="text" required placeholder=" " />
                    <span>{props.span}</span>
                </div>
            </div>
        </div>
    );
}



export default Input;