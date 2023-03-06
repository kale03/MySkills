import React from "react";
import navBar from "./navBar.module.css"
import NavItem from "./navItem/navItem";

const NavBar = () => {
    return(
        <div className={navBar.conteiner}>
            <NavItem value = 'timer'/>
            <NavItem value = 'logIn'/>
        </div>
    );
}

export default NavBar;