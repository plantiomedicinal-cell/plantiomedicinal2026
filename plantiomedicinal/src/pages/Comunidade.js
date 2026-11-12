import React, { useState } from "react";
import './Comunidade.css';
import Footer from '../components/Footer';

/* =========================
   ESTRUTURA DE DADOS (MOCK)
========================= */

/* Array contendo objetos que representam as postagens iniciais exibidas na comunidade, armazenando metadados como autor, imagens e contadores */
const postagens = [
    {
        id: 1,
        usuario: "Ana Souza",
        username: "@anasouza",
        perfil: "/img/icons/logo1.png",
        imagem: "/img/plantacoes/plantando1.jpg",
        titulo: "Minha pequena horta 🌱",
        descricao: "Depois de algumas semanas, finally minhas plantinhas começaram a crescer!",
        likes: 0,
        comentarios: 0
    },
    {
        id: 2,
        usuario: "Carlos Lima",
        username: "@carloslima",
        perfil: "/img/icons/logo1.png",
        imagem: "/img/plantacoes/plantando2.jpg",
        titulo: "Meu jardim floresceu!",
        descricao: "Muito feliz com o resultado depois de cuidar dele todos os dias.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 3,
        usuario: "Maria Oliveira",
        username: "@mariaoliveira",
        perfil: "/img/icons/logo1.png",
        imagem: "/img/plantacoes/plantando3.jpg",
        titulo: "Alecrim crescendo 🌿",
        descricao: "Plantei há alguns meses e agora já posso aproveitar bastante.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 4,
        usuario: "Pedro Santos",
        username: "@pedrosantos",
        perfil: "/img/icons/logo1.png",
        imagem: "/img/plantacoes/plantando4.jpg",
        titulo: "Começando minha horta",
        descricao: "Estou começando agora e essas são minhas primeiras plantas.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 5,
        usuario: "Julia Costa",
        username: "@juliacosta",
        perfil: "/img/icons/logo1.png",
        imagem: "/img/plantacoes/plantando5.jpg",
        titulo: "Cuidados com minhas plantas",
        descricao: "Algumas dicas que aprendi cuidando das minhas plantas.",
        likes: 0,
        comentarios: 0
    },
    {
        id: 6,
        usuario: "Lucas Alves",
        username: "@lucasalves",
        perfil: "/img/icons/logo1.png",
        imagem: "/img/plantacoes/plantando6.jpg",
        titulo: "Minha plantação 🌿",
        descricao: "Mais uma atualização do meu próprio cultivo de plantas medicinais.",
        likes: 0,
        comentarios: 0
    }
];

/* =========================
   COMPONENTE DE LOGIN / CADASTRO
========================= */

/* Componente funcional que gerencia os formulários de autenticação e registro de novos usuários */
function Login({ onLogin, onCancelar }) {
    /* Estado para armazenar o valor digitado no campo de usuário ou e-mail */
    const [usuario, setUsuario] = useState("");
    
    /* Estado para armazenar o valor digitado no campo de senha */
    const [senha, setSenha] = useState("");
    
    /* Estado booleano para alternar a exibição entre a tela de login (false) e a tela de cadastro (true) */
    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    /* Função disparada ao submeter o formulário de login para validação dos campos */
    function entrar(e) {
        /* Previne o comportamento padrão de recarregamento da página do formulário HTML */
        e.preventDefault();

        /* Verifica se ambos os campos (usuário e senha) foram preenchidos antes de prosseguir */
        if (usuario && senha) {
            /* Executa a função passada via propriedade (props) para simular o sucesso na autenticação */
            onLogin();
        } else {
            /* Exibe um alerta nativo caso algum campo obrigatório esteja vazio */
            alert("Preencha todos os campos!");
        }
    }

    /* Renderização condicional: se a flag mostrarCadastro for verdadeira, exibe o formulário de cadastro */
    if (mostrarCadastro) {
        return (
            <div className="login">
                {/* Botão para fechar/voltar acionando a função de cancelamento recebida por propriedade */}
                <button type="button" className="botaoFecharLogin" onClick={onCancelar} title="Voltar">
                    <i className="bi bi-x-lg"></i>
                </button>

                <div className="cabecalhoLogin">
                    <i className="bi bi-person-plus"></i>
                    <h2>Cadastre-se</h2>
                    <p>Faça parte da nossa comunidade!</p>
                </div>

                {/* Formulário de cadastro com prevenção de recarregamento padrão no envio */}
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

                    {/* Botão para alternar de volta para a tela de login alterando o estado */}
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

    /* Renderização padrão: exibe o formulário de login quando mostrarCadastro for falso */
    return (
        <div className="login">
            {/* Botão para fechar ou cancelar o painel de login */}
            <button type="button" className="botaoFecharLogin" onClick={onCancelar} title="Voltar">
                <i className="bi bi-x-lg"></i>
            </button>

            <div className='cabecalhoLogin'>
                <i className="bi bi-person-circle"></i>
                <h2>Entrar</h2>
                <p>Entre para fazer uma postagem</p>
            </div>

            {/* Formulário de login vinculado à função de validação 'entrar' no evento de envio */}
            <form className="formulario" onSubmit={entrar}>
                <div className="campoLogin">
                    <i className="bi bi-person"></i>
                    {/* Campo de texto controlado pelo estado 'usuario' com atualização em tempo real via onChange */}
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
                    {/* Campo de senha controlado pelo estado 'senha' com atualização em tempo real via onChange */}
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

                {/* Botão para mudar para o modo de cadastro alterando o estado para true */}
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

/* =========================
   COMPONENTE PRINCIPAL (COMUNIDADE)
========================= */

/* Componente principal da página de comunidade que gerencia a exibição das postagens e do painel de login */
function Comunidade() {
    /* Estado booleano para controlar se o componente/modal de login está visível ou oculto na tela */
    const [mostrarLogin, setMostrarLogin] = useState(false);

    /* Função auxiliar para simular uma autenticação bem-sucedida, exibindo aviso e fechando o login */
    const simularLogin = () => {
        alert("Login efetuado com sucesso!");
        setMostrarLogin(false);
    };

    return (
        <main className="paginaPostagens">
            <section className="cabecalhoPostagens">
                <h1 className="inicioPostagens">
                    Veja as <strong> POSTAGENS </strong> da nossa comunidade.
                </h1> 

                <p>Aqui você encontra todas as postagens entre vídeos, fotos e receitas, compartilhadas pela nossa própria comunidade.</p>
            </section>

            <article className="containerPostagem">
                <div className="MenuLogin">
                    {/* Renderização condicional: exibe o card de convite apenas se o login NÃO estiver visível */}
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

                            {/* Botão que altera o estado para exibir o componente de login ao ser clicado */}
                            <button
                                className="BotaoAbrirLogin"
                                onClick={() => setMostrarLogin(true)}
                            >
                                <i className="bi bi-plus-circle"></i>
                                Quero fazer uma postagem
                            </button>
                        </div>
                    )}

                    {/* Renderização condicional: exibe o componente Login se a flag for verdadeira, passando funções via props */}
                    {mostrarLogin && (
                        <Login 
                            onLogin={simularLogin} 
                            onCancelar={() => setMostrarLogin(false)} 
                        />
                    )}
                </div>
            </article>

            <div className="gradePostagens">
                {/* Método map para iterar sobre o array 'postagens' e gerar dinamicamente um card estruturado para cada item */}
                {postagens.map((post) => (
                    <article className="cardPostagem" key={post.id}>
                        <div className="perfilPostagem">
                            <img src={post.perfil} alt={`Foto de perfil de ${post.usuario}`} />
                            <div>
                                <b>{post.usuario}</b>
                                <span>{post.username}</span>
                            </div>
                        </div>

                        <img
                            className="imagemPostagem"
                            src={post.imagem}
                            alt={`Publicação: ${post.titulo}`}
                        />

                        <div className="conteudoPostagem">
                            <h3>{post.titulo}</h3>
                            <p className='textoPostagem'>{post.descricao}</p>
                            <div className="interacoesPostagem">
                                <button aria-label="Curtir postagem">
                                    <i className="bi bi-heart"></i>
                                    <span>{post.likes}</span>
                                </button>

                                <button aria-label="Ver comentários da postagem">
                                    <i className="bi bi-chat"></i>
                                    <span>{post.comentarios}</span>
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

export default Comunidade;