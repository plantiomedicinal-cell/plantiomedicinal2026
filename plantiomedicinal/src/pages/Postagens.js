import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Postagens.css';

// 1. COMPONENTE DE LOGIN 
function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();
    if (usuario && senha) {
      onLogin();
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <div className="login">
      <p className='FraseMenuLogin'>Entre para postar:</p>
      <form className='formulario' onSubmit={entrar}>
        <input
        className='input'
          type="text"
          placeholder="Usuário ou e-mail"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
        className='input'
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type='submit' className='EsqueceuSenha'>Esqueceu sua senha?</button>
        <button type="submit" className="BotaoEntrar">Entrar</button>

         <p className='FraseMenuLogin'>ou</p>

         <button type='submit' className='cadastrar'>Cadastre-se</button>

      </form>
    </div>
  );
}

// 2. COMPONENTE PRINCIPAL DE POSTAGENS
function Postagens() {
  // ESTADO para controlar se o login aparece ou não na página
  const [mostrarLogin, setMostrarLogin] = useState(false);
  
  const simularLogin = () => {
    alert("Login efetuado com sucesso!");
    setMostrarLogin(false); // Esconde o login novamente após logar
  };

  return (
    <main>
      <h1 className="inicioPostagens">
        Veja nossas <strong>POSTAGENS!</strong>
      </h1>

      <p>
        Faça parte da nossa comunidade!<br /><br />
        Fique por dentro das nossas ações, visitas e 
      </p>

      <article className='container'>
      <div className='MenuLogin'>

      {/* BOTÃO para mostrar o formulário de login */}
      <button 
        className="BotaoAbrirLogin" 
        onClick={() => setMostrarLogin(true)}
      >
        Quero fazer uma postagem
      </button>

      {/* RENDERIZAÇÃO CONDICIONAL: O componente Login só aparece se 'mostrarLogin' for true */}
      {mostrarLogin && (
        <Login onLogin={simularLogin} />
      )}
      
      </div>
      </article>
    </main>
  );
}

export default Postagens;
