import React from "react";

import "./Pontuacao.css"

export const Pontuacao = ({pontos, xJogando}) => {
    const {xPontos, oPontos} = pontos;
    return (
        <div className="pontuacao">
            <span className={`ponto x-ponto ${!xJogando && "inactive"}`}>X - {xPontos}</span>
            <span className={`ponto o-ponto ${xJogando && "inactive"}`}>O - {oPontos}</span>   
        </div>
    )
}