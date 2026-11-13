import { Link } from 'react-router-dom';
import React from 'react';
import './Conta.css';

const conta = [
    {
        id: 1,
        imagem: "/img/jardins/jardim2.jpg",
        titulo: "Cultivo de Hortelã em Vasos",
        descricao: "Dicas simples para manter a hortelã sempre fresca e pronta para preparar chás medicinais.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 2,
        imagem: "/img/receitas/receita1.jpg",
        titulo: "Receita Caseira para Tosses",
        descricao: "Aprenda a fazer um xarope 100% natural utilizando ingredientes simples da sua cozinha.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 3,
        imagem: "/img/plantas/camomila.webp",
        titulo: "Como Secar Flores de Camomila",
        descricao: "Processo correto para desidratar as flores sem perder as propriedades calmantes.",
        likes: 0,
        comentarios: 0
    }
];

function Conta() {
    return (
        <main className="paginaPerfil">
            <section className="perfilTopo">
                <img
                    className="perfilFoto"
                    src="/img/icons/perfil1.png"
                    alt="Foto de perfil do usuário"
                />

                <div className="perfilInfo">
                    <div className="infoSeparacao">
                        <div>
                            <h1>Usuário</h1>
                            <span className="apelido">@nomedousuario</span>
                        </div>

                        <Link to="/editarperfil">
                            <button className="botaoEditarPerfil">Editar Perfil</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="meusInfo">
                <h2>Minhas Publicações</h2>

                <div className="gradePerfil">
                    {conta.map((post) => (
                        <article className="cardPerfil" key={post.id}>
                            <img
                                className="imagemPerfil"
                                src={post.imagem}
                                alt={`Ilustração da postagem: ${post.titulo}`}
                            />

                            <div className="conteudoPerfil">
                                <h3>{post.titulo}</h3>

                                <p className="textoPerfil">
                                    {post.descricao}
                                </p>

                                <div className="interacoesPerfil">
                                    <button aria-label="Curtir publicação">
                                        <i className="bi bi-heart"></i>
                                        <span>{post.likes}</span>
                                    </button>

                                    <button aria-label="Ver comentários da publicação">
                                        <i className="bi bi-chat"></i>
                                        <span>{post.comentarios}</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
                
            <div className="criarPostagens">
                <Link to="/criarpostagens">
                    <button className="botaoCriarPost">+ Criar novas postagens</button>
                </Link>
            </div>
        </main>
    );
}

export default Conta;