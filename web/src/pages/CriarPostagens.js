import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Comunidade.css';

function CriarPostagens() {
    // Estado para gerenciar o texto das instruções e o contador dinâmico
    const [instrucoes, setInstrucoes] = useState(
        "Descreva o passo a passo detalhado do seu assunto."
    );

    const handleInstrucoesChange = (e) => {
        setInstrucoes(e.target.value);
    };

    return (
        <main className="paginaCriarPostagens">
            <section className="novaPublicacao">
                <div className="cabecalhoPublicacao">
                    <h1>Criar Nova Publicação</h1>
                    <p>Compartilhe os seus conhecimentos, receitas ou experiências de cultivo com a comunidade</p>
                </div>

                <div className="fotoPublicacao">
                    <h2>Imagem de Capa</h2>
                    <div className="exemplo">
                        <div className="iconeExemplo">
                            <i className="bi bi-arrow-up-circle-fill"></i>
                        </div>

                        <h3>Clique ou arraste uma foto aqui</h3>
                        <p>Formatos aceitos: JPG, PNG (até 10MB)</p>
                    </div>
                </div>

                <form className="formPublicacaoPrincipal">
                    <div className="formPublicacao">
                        <div className="grupoForm">
                            <label htmlFor="titulo">Título da Publicação</label>
                            <input 
                                type="text" 
                                id="titulo" 
                                name="titulo" 
                                className="form-control" 
                                placeholder="Ex: Chá Calmante de Erva-Cidreira e Camomila"
                            />
                        </div>

                        <div className="grupoForm">
                            <label htmlFor="categoria">Categoria</label>
                            <input 
                                type="text" 
                                id="categoria" 
                                name="categoria" 
                                className="form-control" 
                                placeholder="Ex: Receitas, Cultivo..."
                            />
                        </div>

                        <div className="grupoForm">
                            <label htmlFor="assunto">Assunto</label>
                            <input 
                                type="text" 
                                id="assunto" 
                                name="assunto" 
                                className="form-control"
                                placeholder="Ex: Hoje eu estarei compartilhando uma receita"
                            />
                        </div>

                        <div className="grupoForm">
                            <label htmlFor="instrucoes">Instruções</label>
                            <div className="textareaPerfil">
                                <textarea 
                                    id="instrucoes" 
                                    name="instrucoes" 
                                    className="form-control" 
                                    maxLength="200"
                                    value={instrucoes}
                                    onChange={handleInstrucoesChange}
                                ></textarea>
                                <span className="char-counter">
                                    {instrucoes.length} / 200 caracteres
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="botaoAlterar">
                        <Link to="/conta">
                            <button type="button" className="cancelar">Cancelar</button>
                        </Link>

                        <Link to="/comunidade">
                            <button type="submit" className="salvar">Publicar</button>
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default CriarPostagens;