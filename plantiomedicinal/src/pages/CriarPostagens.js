import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Comunidade.css';

function CriarPostagens() {
  return (
        <main className="containerPublicacao">
            <section className="novaPublicacao">
                <div className="cabecalhoPublicacao">
                    <h1>Criar Nova Publicação</h1>
                    <p>Compartilhe os seus conhecimentos, receitas ou experiências de cultivo com a comunidade</p>
                </div>

                <hr className="divisao3"></hr>

                <div className="fotoPublicacao">
                    <h2>Imagem de Capa</h2>
                    <div className="exemplo">
                        <div className="iconeExemplo">
                            <i class="bi bi-arrow-up-circle-fill"></i>
                        </div>

                        <h1>Clique ou arraste uma foto aqui</h1>
                        <p>Formatos aceitos: JPG, PNG (até 10MB)</p>
                    </div>
                </div>

                <form>
                    <div className="formPublicacao">
                        <div class="grupoForm">
                            <label for="titulo">Título da Publicação</label>
                            <input 
                            type="text" 
                            id="titulo" 
                            name="titulo" 
                            class="form-control" 
                            placeholder="Ex: Chá Calmante de Erva-Cidreira e Camomila"
                            />
                        </div>

                        <div class="grupoForm">
                            <label for="categoria">Categoria</label>
                            <input 
                            type="text" 
                            id="categoria" 
                            name="categoria" 
                            class="form-control" 
                            />
                        </div>

                        <div class="grupoForm">
                        <label for="assunto">Assunto</label>
                        <input 
                            type="text" 
                            id="assunto" 
                            name="assunto" 
                            class="form-control"
                            placeholder="Ex: Hoje eu estarei compartilhando uma receita"
                        />
                        </div>

                        <div class="grupoForm">
                        <label for="instrucoes">Instruções</label>
                            <div class="textareaPerfil">
                                <textarea 
                                id="instrucoes" 
                                name="instrucoes" 
                                class="form-control" 
                                maxlength="200"
                                oninput="updateCounter(this)"
                                >Descreva o passo a passo detalhado do seu assunto.</textarea>
                                <span class="char-counter" id="counter">84 / 200 caracteres</span>
                            </div>
                        </div>
                    </div>

                <div className='botaoAlterar'>

                    <Link to="/conta">
                    <button className='cancelar'>Cancelar</button>
                    </Link>

                    <Link to="/comunidade">
                    <button className='salvar'>Publicar</button>
                    </Link>
                </div>
                </form>
            </section>
        </main>
    );
}

export default CriarPostagens;