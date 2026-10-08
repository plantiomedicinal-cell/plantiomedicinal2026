import { Link } from 'react-router-dom';
import React from 'react';
import './Conta.css';

const conta = [
    {
        id: 1,
        imagem: "/img/jardim2.jpg",
        titulo: "Cultivo de Hortelã em Vasos",
        descricao: "Dicas simples para manter a hortelã sempre fresca e pronta para preparar chás medicinais.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 2,
        imagem: "/img/receita1.jpg",
        titulo: "Receita Caseira para Tosses",
        descricao: "Aprenda a fazer um xarope 100% natural utilizando ingredientes simples da sua cozinha.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 3,
        imagem: "/img/camomila.webp",
        titulo: "Como Secar Flores de Camomila",
        descricao: "Processo correto para desidratar as flores sem perder as propriedades calmantes.",
        likes: 0,
        comentarios: 0
    }
];

function Conta() {
    return (
        <div className="perfilContainer">

            <div className="perfilTopo">

                <img
                    className="perfilFoto"
                    src="/img/perfil1.png"
                    alt="Foto de perfil"
                />

                <div className="perfilInfo">

                    <div className="infoSeparacao">
                        <div>
                            <h1>Usuario</h1>
                            <span className="apelido">@nomedousuario</span>
                        </div>

                        <Link to="/editarperfil">
                        <button>Editar Perfil</button>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="meusInfo">
                <h2>Minhas Publicações</h2>
                <hr className="divisao3" />

                <div className="gradePerfil">
                    {conta.map((post) => (
                        <article className="cardPerfil" key={post.id}>

                            <img
                                className="imagemPerfil"
                                src={post.imagem}
                                alt={post.titulo}
                            />

                            <div className="conteudoPerfil">

                                <h3>{post.titulo}</h3>

                                <p className="textoPerfil">
                                    {post.descricao}
                                </p>

                                <div className="interacoesPerfil">

                                    <button>
                                        <i className="bi bi-heart"></i>
                                        {post.likes}
                                    </button>

                                    <button>
                                        <i className="bi bi-chat"></i>
                                        {post.comentarios}
                                    </button>

                                </div>
                            </div>

                        </article>
                    ))}
                </div>
            </div>

            <div className="criarPostagens">
                <button>+ Criar novas postagens</button>
            </div>

        </div>
    );
}

export default Conta;