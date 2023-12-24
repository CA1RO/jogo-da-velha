import React from "react";

import "./ZerarPontuacao.css"

export const ZerarPontuacao = ({zerarJogo}) => {
    return (
        <button className="zerarJogo" onClick={zerarJogo}>Zerar placar</button>
    )
}