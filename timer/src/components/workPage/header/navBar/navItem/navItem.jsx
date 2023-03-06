import React from "react";
import navItem from "./navItem.module.css"

const NavItem = (props) => {
    return(
        <div className={navItem.conteiner}>
            <a href={props.value}>{props.value}</a>
        </div>
    );
}


export default NavItem;