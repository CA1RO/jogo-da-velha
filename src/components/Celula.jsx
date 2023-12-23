import React from "react";

import "./Celula.css"

export const Celula = ({value, onClick}) => {
    const style = value === "X" ? "celula x" : "celula o";

    return(
        <button className={style} onClick={onClick}>{value}</button>
    )
}