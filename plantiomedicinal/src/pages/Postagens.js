import React, { useState } from 'react';
import './Postagens.css';
import Footer from '../components/Footer';

const postagens = [
    {
        id: 1,
        usuario: "Ana Souza",
        username: "@anasouza",
        perfil: "/img/logo1.png",
        imagem: "/img/boldo.webp",
        titulo: "Minha pequena horta 🌱",
        descricao: "Depois de algumas semanas, finalmente minhas plantinhas começaram a crescer!",
        likes: 0,
        comentarios: 0
    },
    {
        id: 2,
        usuario: "Carlos Lima",
        username: "@carloslima",
        perfil: "/img/logo1.png",
        imagem: "/img/hortela.webp",
        titulo: "Meu jardim floresceu!",
        descricao: "Muito feliz com o resultado depois de cuidar dele todos os dias.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 0,
        usuario: "Maria Oliveira",
        username: "@mariaoliveira",
        perfil: "/img/logo1.png",
        imagem: "/img/alecrim.webp",
        titulo: "Alecrim crescendo 🌿",
        descricao: "Plantei há alguns meses e agora já posso aproveitar bastante.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 4,
        usuario: "Pedro Santos",
        username: "@pedrosantos",
        perfil: "/img/logo1.png",
        imagem: "/img/pimentamacaco.webp",
        titulo: "Começando minha horta",
        descricao: "Estou começando agora e essas são minhas primeiras plantas.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 5,
        usuario: "Julia Costa",
        username: "@juliacosta",
        perfil: "/img/logo1.png",
        imagem: "/img/louro.webp",
        titulo: "Cuidados com minhas plantas",
        descricao: "Algumas dicas que aprendi cuidando das minhas plantas.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 6,
        usuario: "Lucas Alves",
        username: "@lucasalves",
        perfil: "/img/logo1.png",
        imagem: "/img/guaco.webp",
        titulo: "Minha plantação 🌿",
        descricao: "Mais uma atualização do meu cultivo.",
        likes: 0,
        comentarios: 0
    }
];

function Login({ onLogin }) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    function entrar(e) {
        e.preventDefault();

        if (usuario && senha) {
            onLogin();
        } else {
            alert("Preencha todos os campos!");
        }
    }

    if (mostrarCadastro) {
    return (
        <div className="login">
            <div className="cabecalhoLogin">
                <i className="bi bi-person-plus"></i>
                <h2>Cadastre-se</h2>
                <p>Faça parte da nossa comunidade!</p>
            </div>

            <form
                className="formulario"
                onSubmit={(e) => e.preventDefault()}
            >
            
            <div className="campoLogin">
                <i className="bi bi-person"></i>
                <input
                    className="input"
                    type="text"
                    placeholder="Nome completo"
                    required
                />
            </div>
            
            <div className="campoLogin">
                <i className="bi bi-envelope-at"></i>
                <input
                    className="input"
                    type="email"
                    placeholder="E-mail"
                    required
                />
            </div>

            <div className="campoLogin">
                <i className="bi bi-lock"></i>
                <input
                    className="input"
                    type="password"
                    placeholder="Senha"
                    required
                />
            </div>

                <button
                    type="submit"
                    className="BotaoCadastrar"
                >
                    Cadastrar
                </button>

                <button 
                    type="button"
                    className='BotaoEntrar'
                    onClick={() => setMostrarCadastro(false)}
                >
                    Já tenho uma conta. Entrar
                </button>
            </form>
        </div>
    );
}

    return (
        <div className="login">
            <div className='cabecalhoLogin'>
                <i className="bi bi-person-circle"></i>
                <h2>Entrar</h2>
                <p>Entre para fazer uma postagem</p>
            </div>

            <form className="formulario" onSubmit={entrar}>
                <div className="campoLogin">
                    <i className="bi bi-person"></i>
                    <input
                        className="input"
                        type="text"
                        placeholder="Usuário ou e-mail"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>

                <div className="campoLogin">
                    <i className="bi bi-lock"></i>
                    <input
                        className="input"
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <button type="button" className="EsqueceuSenha">
                    Esqueceu sua senha?
                </button>

                <button type="submit" className="BotaoEntrar">
                    Entrar
                </button>

                <div className="separadorLogin">
                    <span>ou</span>
                </div>

                <button
                    type="button"
                    className='BotaoCadastrar'
                    onClick={() => setMostrarCadastro(true)}>
                    Cadastre-se
                </button>
            </form>
        </div>
    );
}

function Postagens() {
    const [mostrarLogin, setMostrarLogin] = useState(false);

    const simularLogin = () => {
        alert("Login efetuado com sucesso!");
        setMostrarLogin(false);
    };

    return (
        <main className="paginaPostagens">
            <section className="cabecalhoPostagens">
                <h1 className="inicioPostagens">
                    Veja as <strong>POSTAGENS</strong> da nossa comunidade.
                </h1>
            </section>

            <article className="containerPostagem">
                <div className="MenuLogin">
                    {!mostrarLogin && (
                        <div className="convitePostagem">
                            <div className="iconePostagem">
                                <i className="bi bi-pencil-square"></i>
                            </div>

                            <h2>Quer compartilhar algo?</h2>

                            <p>
                                Faça parte da nossa comunidade e compartilhe
                                suas experiências, jardins e conhecimentos.
                            </p>

                            <button
                                className="BotaoAbrirLogin"
                                onClick={() => setMostrarLogin(true)}
                            >
                                <i className="bi bi-plus-circle"></i>
                                Quero fazer uma postagem
                            </button>
                        </div>
                    )}

                    {mostrarLogin && (
                        <Login onLogin={simularLogin} />
                    )}
                </div>
            </article>

            <div className="gradePostagens">
    {postagens.map((post) => (

        <article className="cardPostagem" key={post.id}>
            <div className="perfilPostagem">
                <img src={post.perfil} alt={post.usuario} />
                <div>
                    <b>{post.usuario}</b>
                    <span>{post.username}</span>
                </div>
            </div>

            <img
                className="imagemPostagem"
                src={post.imagem}
                alt={post.titulo}
            />

            <div className="conteudoPostagem">
                <h3>{post.titulo}</h3>
                <p className='textoPostagem'>{post.descricao}</p>
                <div className="interacoesPostagem">

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
         

   <Footer />
        </main> 
    );
}

export default Postagens;