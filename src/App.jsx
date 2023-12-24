import React, {useState} from "react"

import './App.css'

import {Tabuleiro} from "./components/Tabuleiro"
import { Pontuacao } from "./components/Pontuacao";
import { BotaoRecomeca } from "./components/BotaoRecomeca";

function App() {

  const Vitorias = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const[tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const[xJogando, setXJogando] = useState(true);
  const[pontos, setPontos] = useState({xPontos: 0, oPontos: 0})
  const[fimdeJogo, setFimdeJogo] = useState(false)

  const handleCelulaClick = (celulaIdx) => {
    const updatedTabuleiro = tabuleiro.map((value, idx) => {
      if(idx === celulaIdx) {
        return xJogando === true ? "X" : "O";
      } else {
        return value;
      }
    })

    const ganhador = checkVitoria(updatedTabuleiro);

    if(ganhador) {
      if (ganhador === "O") {
        let {oPontos} = pontos;
        oPontos += 1
        setPontos({...pontos, oPontos})
      } else {
        let {xPontos} = pontos;
        xPontos += 1
        setPontos({...pontos, xPontos})
      }
    }

    setTabuleiro(updatedTabuleiro);

    setXJogando(!xJogando);
  }
  const checkVitoria = (tabuleiro) => {
    for(let i = 0; i<Vitorias.length; i++) {
      const [x,y,z] =Vitorias[i];

      if(tabuleiro[x] && tabuleiro[x] === tabuleiro[y] && tabuleiro[y] === tabuleiro[z]){
        setFimdeJogo(true)
        return tabuleiro[x];
      }
    }
  }

  const recomecarJogo = () => {
    setFimdeJogo(false)
    setTabuleiro(Array(9).fill(null))
  }

  return (
    <div className='App'>
      <Pontuacao pontos={pontos} xJogando={xJogando}/>
      <Tabuleiro tabuleiro={tabuleiro} onClick={fimdeJogo ? recomecarJogo : handleCelulaClick} />
      <BotaoRecomeca recomecarJogo={recomecarJogo} />      
    </div>
  )

}

export default App;
