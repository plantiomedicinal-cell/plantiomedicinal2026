import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  return (
    <header className="App-header">

      <nav>
        <Link to="/">
          <i class="bi bi-houses-fill"></i>
          Ínicio
        </Link>

        <Link to="/sobre">
          <i class="bi bi-chat-left-text-fill"></i>
          Sobre Nós
        </Link>

        <Link to="/receitas">
          <i class="bi bi-clipboard2-minus-fill"></i>
          Receitas
        </Link>

        <Link to="/catalogo">
          <i class="bi bi-grid-1x2-fill"></i>
          Catálogo
        </Link>

        <Link to="/postagens">
          <i class="bi bi-image-fill"></i>
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