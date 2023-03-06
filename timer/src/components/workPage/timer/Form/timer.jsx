import React from "react";
import AddButton from "../../../buttons/add/addButton";
import TimerButton from "../../../buttons/timeButton/timerButton";
import Input from "../../../input/input";
import ItemColections from "./itemColections/item";
import timer from "./timer.module.css"

const Timer = (props) => {
    console.log(props)
    return (
        <div className={timer.conteiner}>
            <div className={timer.inputContainer}>
                <Input span="hours" />
                <Input span="min" />
                <Input span="sec" />
                <TimerButton />
            </div>
            <div className={timer.timerConteiner}>
                <div className={timer.time}>
                    <div className={timer.hoursConteiner}>
                        <div className={timer.hours} id='hours'>00</div>
                        <h3 className={timer.h}>Hours</h3>
                    </div>
                    <h2 className={timer.dot1}>:</h2>
                    <div className={timer.minuteConteiner}>
                        <div className={timer.minute} id='min'>00</div>
                        <h3 className={timer.h}>min</h3>
                    </div>
                    <h2 className={timer.dot2}>:</h2>
                    <div className={timer.secondConteiner}>
                        <div className={timer.second} id='sec'>00</div>
                        <h3 className={timer.h}>sec</h3>
                    </div>
                </div>
                <div className={timer.buttonConteiner}>
                    <button className={timer.playButton}></button>
                    <button className={timer.stopButton}></button>
                    <button className={timer.reloadButton}></button>
                    <button className={timer.cleanButton}></button>
                </div>
            </div>
            <div className={timer.add}><AddButton /></div>
        </div>
    );
}



export default Timer;
