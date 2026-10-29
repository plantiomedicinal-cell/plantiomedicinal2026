import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './Registro.css';

function Registro() {
  return (
  <main className="mainRegistro">
    <div className="registro">
      <div className="agrupamentoBotoes">
        <button className="login">Entrar</button>
        <button className="cadastro">Criar Conta</button>
      </div>

      <h1>Bem-vindo de volta!</h1>
      <p>Aceda à sua conta para ver as suas receitas salvas.</p>
    <form className="registroForm">

      <div className="registroInfo">
        <label for="email">E-mail</label>
        <input type="email" placeholder="seu-email@gmail.com" id="email" className="form-registro" required></input>
      </div>

      <div className="registroInfo">
        <label for="senha">Senha</label>
        <input type="password" placeholder="**********" id="senha" className="form-registro" required></input>
      </div>

        <button className="entrar">Entrar na Conta</button>
    </form>
    </div>
  </main>
  );
}

export default Registro;