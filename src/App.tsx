import React, { useState } from "react";
import "./App.css";

import Routes from "./routes";

function App() {
  const [counter, setCounter] = useState(0); //retorna um array [valor do estado, funcao para atualizar]

  function handleButtonClick() {
    setCounter(counter + 1);
    //set eh usado para atualizar o valor sem que alterar a variavel (questao de performance)
  }

  return <Routes />;
}

export default App;
