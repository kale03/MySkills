import React from "react";
import header from "./header.module.css"
import NavBar from "./navBar/navBar";

const Header = () => {
    return (
        <div className={header.header}>
            <div className={header.title}>
                <h1>OnlineTimer</h1>
            </div>
            <NavBar></NavBar>
        </div>
    );
}


export default Header;