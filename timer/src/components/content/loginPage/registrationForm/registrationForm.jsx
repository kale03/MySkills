import React from "react";
import rf from "./registrationForm.module.css"

const RegistrationForm = () => {
    return(
        <div className={rf.conteiner}>
            <div className={rf.block}>
                <div className={rf.form}>
                    <h2>Sign Up</h2>
                    <div className={rf.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>E-mail</span>
                    </div>
                    <div className={rf.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>Username</span>
                    </div>
                    <div className={rf.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>Password</span>
                    </div>
                    <div className={rf.inputBox}>
                        <input type="text" required placeholder=" " />
                        <span>Repeat the password</span>
                    </div>
                    <div className={rf.buttonContainer}>
                        <button className={rf.button}>Sign Up!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RegistrationForm;