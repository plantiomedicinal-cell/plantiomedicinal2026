import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">

      <nav>

        <Link to="/sobre">
          Sobre Nós
        </Link>

        <Link to="/receitas">
          Receitas
        </Link>

        <Link to="/catalogo">
          Catálogo
        </Link>

        <Link to="/postagens">
          Postagens
        </Link>

      </nav>

      <div className="logo">
        <Link to="/">
          <img src="./img/logo1.png" alt="Logo" />
        </Link>
      </div>

    </header>
  );
}

export default Header;