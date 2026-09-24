import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="App-footer">

        <div className='infoDivisao'>
        <div className='separacao'>
        <h2>Plantio Medicinal</h2>
            <p>Site sobre plantas medicinais, com catálogo de espécies e receitas para conhecer e aproveitar seus benefícios.</p>
            <img src='/img/logo2.png'/>
            <p className='direitosreservados'><strong>© 2026 Plantio Medicinal. Todos os direitos reservados.</strong></p>
        </div>

        <div className='separacao'>
        <h3>Navegação</h3>

            <Link to="/">
            Início
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
            </div>

        <div className='separacao'>
        <h3>Institucional</h3>

            <Link to="/sobre">
            Sobre Nós
            </Link>

            <Link to="/contato">
            Contato
            </Link>
            <div className='contatos'>
                <Link to="/">
                  <i class="bi bi-whatsapp"></i>
                </Link>

                <Link to="/">
                  <i class="bi bi-facebook"></i>
                </Link>

                <Link to="/">
                  <i class="bi bi-instagram"></i>
                </Link>               
            </div>
        </div>
    </div>
    </footer>
  );
}

export default Footer;