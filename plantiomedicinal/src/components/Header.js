
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {

    // Função para abrir e fechar o menu
    function abrirMenu() {

        // Capturar o grupo de navegação
        const menu = document.querySelector(".navegacao");

        // Adicionar ou remover a classe ativo
        if (menu) {
            menu.classList.toggle("ativo");
        }
    }

    return (
        <header>
            <nav>

                {/* Logo e nome do projeto */}
                <div className="logoHeader">
                    <img
                        src="./img/icons/logo2.png"
                        alt="Logo Plantio Medicinal"
                    />

                    <div className="textoLogo">
                        <h2>Plantio Medicinal</h2>
                    </div>
                </div>

                {/* Links de navegação */}
                <div className="navegacao">

                    <Link to="/">
                        <i className="bi bi-houses-fill"></i>
                        Início
                    </Link>

                    <Link to="/sobre">
                        <i className="bi bi-chat-left-text-fill"></i>
                        Sobre Nós
                    </Link>

                    <Link to="/receitas">
                        <i className="bi bi-clipboard2-minus-fill"></i>
                        Receitas
                    </Link>

                    <Link to="/catalogo">
                        <i className="bi bi-grid-1x2-fill"></i>
                        Catálogo
                    </Link>

                </div>

                {/* Botão de navegação */}
                <button
                    className="botaoMenu"
                    type="button"
                    onClick={abrirMenu}
                    aria-label="Abrir ou fechar menu"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

            </nav>
        </header>
    );
}

export default Header;
