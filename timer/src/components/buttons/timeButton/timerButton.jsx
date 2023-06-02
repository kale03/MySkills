import React from "react";
import tb from "./timerButton.module.css"


const TimerButton = (props) => {

    

    return(
        <div className={tb.buttonContainer}>
            <button className={tb.button}>Set time!</button>
        </div>
    );
}





export default TimerButton;