import React from "react";
import wp from "./workPage.module.css"
import Colections from "./colections/colectionContainer/colections";
import Timer from "./timer/Form/timer";

const WorkPage = () => {
    return(
        <div className={wp.conteiner}>
            <Timer/>
            <Colections/>
        </div>
    );
}

export default WorkPage;