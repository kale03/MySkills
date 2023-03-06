import React from "react";
import forgot from "../forgot.module.css"

const ForgotPageStep1 = () => {
    return (
        <div className={forgot.conteiner}>
            <div className={forgot.block}>
                <div className={forgot.form}>
                    <h2>Forgot you`r password</h2>
                    <div className={forgot.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>E-mail</span>
                    </div>
                    <div className={forgot.links}>
                        <a href="/registration">Sign Up</a>
                    </div>
                    <div className={forgot.buttonContainer}>
                        <button className={forgot.button}>Forgot!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPageStep1;