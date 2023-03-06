import React from "react";
import ncp from "./newColectionPage.module.css"

const NewColectionPage = () => {
    return (
        <div className={ncp.conteiner}>
            <div className={ncp.inputConteiner}>
                <div className={ncp.inputBox}>
                    <input type="text" required placeholder=" " />
                    <span>Name colection</span>
                </div>
            </div>
            <div className={ncp.buttonConteiner}><button className={ncp.button}>Add!</button></div>
        </div>
    );
}


export default NewColectionPage;