import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import lf from "./loginForm.module.css"

const LoginForm = () => {
    return (
        <div className={lf.conteiner}>
            <div className={lf.block}>
                <div className={lf.form}>
                    <h2>log in</h2>
                    <div className={lf.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>Username</span>
                    </div>
                    <div className={lf.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>Password</span>
                    </div>
                    <div className={lf.links}>
                        <a href="/forgot">Forgot Password?</a>
                        <a href="/registration">Sign Up</a>
                    </div>
                    <div className={lf.buttonContainer}>
                        <button className={lf.button}>Login!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LoginForm;