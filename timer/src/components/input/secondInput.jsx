import React from "react";
import input from "./input.module.css"


const SecondInput = ({ onChange }) => {
    const readHours = (event) => {
        onChange(hoursValue.current.value)
    }
    let hoursValue = React.createRef()
    
    return (
        <div className={input.conteiner}>
            <div className={input.secondInput}>
                <div className={input.inputBox}>
                    <input type="text" required placeholder=" " onChange={readHours} ref={hoursValue} />
                    <span>Seconds</span>
                </div>
            </div>
        </div >
    );
}



export default SecondInput;