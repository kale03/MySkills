import React from "react";
import forgot from "../forgot.module.css"

const ForgotPageStep2 = () => {
    return (
        <div className={forgot.conteiner}>
            <div className={forgot.block}>
                <div className={forgot.form}>
                    <h2>Step 2</h2>
                    <div className={forgot.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>Enter the code in e-mail</span>
                    </div>
                    <div className={forgot.links}>
                        <a href="/registration">Sign Up</a>
                    </div>
                    <div className={forgot.buttonContainer}>
                        <button className={forgot.button}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPageStep2;