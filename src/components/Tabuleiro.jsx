import React from "react";

import {Celula} from "./Celula"
import "./Tabuleiro.css"

export const Tabuleiro = ({tabuleiro, onClick}) => {
    return (
        <div className="tabuleiro">
            {tabuleiro.map((value, idx) => {
                return <Celula value={value} onClick={() => value === null && onClick(idx)}/>
            })}
            </div>            
    )
}