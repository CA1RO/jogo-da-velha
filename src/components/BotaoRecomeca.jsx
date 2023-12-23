import React from "react";

import "./BotaoRecomeca.css"

export const BotaoRecomeca = ({recomecarJogo}) => {
    return (
        <button className="botaoRecomeca" onClick={recomecarJogo}>Reiniciar jogo</button>
    )
}