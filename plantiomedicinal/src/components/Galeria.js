import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Galeria.css";

function Galeria() {

    const fotos = [
        {
            imagem: "/img/alecrim.jpg",
            nome: "Jardim de Alecrim",
            descricao: "Um pequeno jardim dedicado ao cultivo de alecrim, uma planta aromática muito utilizada em receitas e preparos naturais.",
            autor: "Maria Silva",
            data: "10/09/2026"
        },
        {
            imagem: "/img/guaco.jpg",
            nome: "Cantinho do Guaco",
            descricao: "Cultivo de guaco em um espaço simples e bem cuidado, mostrando como plantas medicinais podem fazer parte do jardim.",
            autor: "João Santos",
            data: "08/09/2026"
        },
        {
            imagem: "/img/louro.jpg",
            nome: "Horta de Louro",
            descricao: "Uma área destinada ao cultivo do louro, aproveitando um espaço do jardim para cultivar diferentes espécies.",
            autor: "Ana Costa",
            data: "05/09/2026"
        },
        {
            imagem: "/img/moringa.jpg",
            nome: "Jardim de Moringa",
            descricao: "Exemplo de cultivo de moringa em um jardim doméstico, reunindo plantas de diferentes características.",
            autor: "Carlos Oliveira",
            data: "02/09/2026"
        },
        {
            imagem: "/img/orapronobis.jpg",
            nome: "Espaço Ora-pro-nóbis",
            descricao: "Um espaço dedicado ao cultivo da ora-pro-nóbis, mostrando uma das espécies presentes em nosso catálogo.",
            autor: "Julia Martins",
            data: "30/08/2026"
        },
        {
            imagem: "/img/pimentamacaco.jpg",
            nome: "Jardim de Pimenta-Macaco",
            descricao: "Um pequeno cultivo de pimenta-macaco apresentado pelos participantes da nossa comunidade.",
            autor: "Pedro Souza",
            data: "27/08/2026"
        }
    ];

    const [atual, setAtual] = useState(0);
    const inicioX = useRef(null);

    function anterior() {
        setAtual((atual) =>
            atual === 0 ? fotos.length - 1 : atual - 1
        );
    }

    function proxima() {
        setAtual((atual) =>
            atual === fotos.length - 1 ? 0 : atual + 1
        );
    }

    // Troca automaticamente a cada 5 segundos
    useEffect(() => {

        const intervalo = setInterval(() => {
            proxima();
        }, 5000);

        return () => clearInterval(intervalo);

    }, []);

    function iniciarArraste(e) {
        inicioX.current = e.clientX;
    }

    function finalizarArraste(e) {

        if (inicioX.current === null) return;

        const distancia = e.clientX - inicioX.current;

        if (distancia > 50) {
            anterior();
        }

        if (distancia < -50) {
            proxima();
        }

        inicioX.current = null;
    }

    return (
        <section className="galeria">

            <div
                className="carrossel"
                onPointerDown={iniciarArraste}
                onPointerUp={finalizarArraste}
                onPointerLeave={() => inicioX.current = null}
            >

                <button
                    className="seta esquerda"
                    onClick={anterior}
                >
                    ‹
                </button>

                <div className="conteudoGaleria">

                    <div className="imagemPrincipal">

                        <img
                            src={fotos[atual].imagem}
                            alt={fotos[atual].nome}
                        />

                        <span className="contador">
                            {atual + 1} / {fotos.length}
                        </span>

                    </div>

                    <div className="infoJardim">

                        <h2>{fotos[atual].nome}</h2>

                        <p>
                            {fotos[atual].descricao}
                        </p>

                        <Link to="/postagens" className="botaoPostagem">
                            Ver postagem
                        </Link>

                        <div className="publicacao">

                            <span>
                                Publicado por <b>{fotos[atual].autor}</b>
                            </span>

                            <span>
                                {fotos[atual].data}
                            </span>

                        </div>

                    </div>

                </div>

                <button
                    className="seta direita"
                    onClick={proxima}
                >
                    ›
                </button>

            </div>

            <div className="indicadores">

                {fotos.map((foto, index) => (

                    <button
                        key={index}
                        className={index === atual ? "ativo" : ""}
                        onClick={() => setAtual(index)}
                        aria-label={`Mostrar ${foto.nome}`}
                    />

                ))}

            </div>

        </section>
    );
}

export default Galeria;