import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();

    if (usuario && senha) {
      alert("Login realizado!");
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <div className="login">
      <h2>Entrar para postar</h2>

      <form onSubmit={entrar}>
        <input
          type="text"
          placeholder="Usuário ou e-mail"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;