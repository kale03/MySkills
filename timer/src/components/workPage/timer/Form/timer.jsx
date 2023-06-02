import React from "react";
import AddButton from "../../../buttons/add/addButton";
import timer from "./timer.module.css"
import { useState } from "react";
import HoursInput from "../../../input/HoursInput";
import MinutesInput from "../../../input/MinutesInput";
import SecondInput from "../../../input/secondInput";

const Timer = (props) => {

    // получение времени из инпутов


    console.log(props)
    const [hour, sethour] = useState("00")
    const [min, setMin] = useState("00")
    const [sec, setSec] = useState("00")
    const readHours = (hour) => {
        sethour(hour)
    }
    const readMinutes = (min) => {
        setMin(min)
    }
    const readSeconds = (sec) => {
        setSec(sec)
    }
    
    // создание времени


    function setTime(){
        SetMinutes()
        SetHours()
        SetSeconds()
    }
    const [hours,setHours] = useState("00")
    const [minutes,setMinutes] = useState("00")
    const [seconds,setSeconds] = useState("00")
    const SetHours = (hours)=>{
        if (hour !== 0 & hour !== null & hour !== undefined & hour !== "" & hour !=="00"){
            if(hour < 10){
                setHours(hours = "0" + hour)
            }else{setHours(hours = hour)}
        } else { setHours(hours = "00")}
    }
    const SetMinutes = (minutes)=>{
        if (min !== 0 & min !== null & min !== undefined & min !== "" & min !=="00"){
            if (min < 10 ){
                setMinutes(minutes =  "0" + min)
            } else{setMinutes(minutes = min)} 
        } else { setMinutes(minutes = "00")}
    }
    const SetSeconds = (seconds)=>{
        if (sec !== 0 & sec !== null & sec !== undefined & sec !== "" & sec !=="00"){
            if (sec < 10){
                setSeconds(seconds = "0" + sec)
            } else{setSeconds(seconds = sec)}
        } else { setSeconds(seconds = "00")}
    }

    // очистка времени
    

    function clean(){
        ClearMinutes()
        CleanHour()
        CleanSecond()
    }
    const CleanSecond = (seconds)=>{
        setSeconds(seconds = "00")
    }
    const CleanHour = (hours)=>{
        setHours(hours = "00")
    }
    const ClearMinutes = (minutes)=>{
        setMinutes(minutes = "00")
    }
    
    // таймер
    let timeleft = sec
    
    const startSecond = (seconds)=>{
        
        setInterval(()=>{
            setSeconds(seconds = timeleft - 1)
            timeleft = timeleft - 1
            console.log(seconds)
            return timeleft
        },1000)
            
            
        }
    
    const startHour = (hours)=>{
        setHours(hours = hour - 1)
    }
    const startMinutes = (minutes)=>{
        setMinutes(minutes = min -1)
    }

    function start(){
        startSecond()
    }

    



    return (
        <div className={timer.conteiner}>
            <div className={timer.inputContainer}>
                <HoursInput onChange={readHours} />
                <MinutesInput onChange={readMinutes} />
                <SecondInput onChange={readSeconds} />
                <div className={timer.buttonContainer} >
                    <button className={timer.button} onClick={setTime} >Set time!</button>
                </div>
            </div>
            <div className={timer.timerConteiner}>
                <div className={timer.time}>
                    <div className={timer.hoursConteiner}>
                        <div className={timer.hours}>{hours}</div>
                        <h3 className={timer.h}>Hour</h3>
                    </div>
                    <h2 className={timer.dot1}>:</h2>
                    <div className={timer.minuteConteiner}>
                        <div className={timer.minute}>{minutes}</div>
                        <h3 className={timer.h}>min</h3>
                    </div>
                    <h2 className={timer.dot2}>:</h2>
                    <div className={timer.secondConteiner}>
                        <div className={timer.second}>{seconds}</div>
                        <h3 className={timer.h}>sec</h3>
                    </div>
                </div>
                <div className={timer.buttonConteiner}>
                    <button className={timer.playButton} onClick={start}></button>
                    <button className={timer.stopButton}></button>
                    <button className={timer.reloadButton}></button>
                    <button className={timer.cleanButton} onClick={clean}></button>
                </div>
            </div>
            <div className={timer.add}><AddButton /></div>
        </div>
    );

}



export default Timer;
