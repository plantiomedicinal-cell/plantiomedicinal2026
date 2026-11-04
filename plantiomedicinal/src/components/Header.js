import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  return (
    <header>

      <nav>
        <div className='navegacao'>

            <Link to="/">
              <i class="bi bi-houses-fill"></i>
              Início
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

        {/* <Link to="/conta" className="perfilNav">
          <i class="bi bi-person-circle"></i>
        </Link> */}

        {/* <Link to="/comunidade">
          <i class="bi bi-people-fill"></i>
          Comunidade
        </Link> */}
        </div>

        <button class="botaoNavegacao">
            <div></div>
            <div></div>
            <div></div>
        </button>

      </nav>

    </header>
  );
}

export default Header;