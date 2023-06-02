import React from "react";
import input from "./input.module.css"


const MinutesInput = ({ onChange }) => {
    const readHours = (event) => {
        onChange(hoursValue.current.value)
    }
    let hoursValue = React.createRef()
    
    return (
        <div className={input.conteiner}>
            <div className={input.minutesInput}>
                <div className={input.inputBox}>
                    <input type="text" required placeholder=" " onChange={readHours} ref={hoursValue} />
                    <span>Minutes</span>
                </div>
            </div>
        </div >
    );
}



export default MinutesInput;