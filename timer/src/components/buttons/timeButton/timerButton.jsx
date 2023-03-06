import React from "react";
import tb from "./timerButton.module.css"

const TimerButton = () => {
    return(
        <div className={tb.buttonContainer}>
            <button className={tb.button} id='setTime'>Set time!</button>
        </div>
    );
}





export default TimerButton;