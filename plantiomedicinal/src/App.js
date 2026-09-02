
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Header />

      <main>

      <span className="spanInicio">
      <img src="./img/logo1.png" />
      <b>+ de 20 espécies diferentes</b>
      </span>

      <div className="info">

        <div className="infoTexto">

          <h1>
            Faça seu jardim <br />
            <strong>MEDICINAL</strong> <br />
            agora, na sua casa!
          </h1>

          <p>
            Veja as plantas medicinais com segurança. Consulte fichas
            técnicas detalhadas de espécies vegetais, filtre por
            características e encontre a planta ideal para cada projeto
            de plantio.
          </p>

          <a href="">
            <button className="infoBotao">
              <b>SAIBA MAIS!</b>
            </button>
          </a>

          </div>

          <div className="infoImagem">
            <img src="./img/4.png" alt="Logo" />
          </div>

        </div>

        <hr className="divisao1" />
        <hr className="divisao2" />

      </main>

    </div>
  );
}

export default App;

