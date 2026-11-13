import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Conta.css';

function EditarPerfil() {
    // Estado para controlar o texto da biografia e o contador de caracteres
    const [biografia, setBiografia] = useState(
        "Cultivo ervas medicinais em casa e compartilho receitas de xaropes e chás naturais."
    );

    const handleBiografiaChange = (e) => {
        setBiografia(e.target.value);
    };

    return (
        <main className="paginaEditarPerfil">
            <div className="editarPerfil">
                <div className="cabecalhoPerfil">
                    <h1>Editar Perfil</h1>
                    <p>Atualize suas informações pessoais e preferências da conta.</p>

                    <hr className="divisao3" />

                    <div className="editarFoto">
                        <img
                            className="perfilFoto"
                            src="/img/icons/perfil1.png"
                            alt="Foto de perfil atual"
                        />

                        <div className="botaoEditar">
                            <div className="botoes">
                                <button className="alterar">Alterar Foto</button>
                                <button className="remove">Remover</button>
                            </div>

                            <p>JPG ou PNG. Tamanho máximo de 5MB.</p>
                        </div>
                    </div>

                    <hr className="divisao3" />

                    <form className="alteracoesPerfil">
                        <div className="formPerfil">
                            <div className="grupoForm">
                                <label htmlFor="nome">Nome Completo</label>
                                <input 
                                    type="text" 
                                    id="nome" 
                                    name="nome" 
                                    className="form-control" 
                                    defaultValue="Ana Silva" 
                                    placeholder="O seu nome completo"
                                />
                            </div>

                            <div className="grupoForm">
                                <label htmlFor="username">Nome de Usuário (@)</label>
                                <input 
                                    type="text" 
                                    id="username" 
                                    name="username" 
                                    className="form-control" 
                                    defaultValue="anasilva_horta" 
                                    placeholder="username"
                                />
                            </div>
                        </div>

                        <div className="grupoForm">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-control" 
                                defaultValue="ana.silva@email.com" 
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>

                        <div className="grupoForm">
                            <label htmlFor="biografia">Biografia</label>
                            <div className="textareaPerfil">
                                <textarea 
                                    id="biografia" 
                                    name="biografia" 
                                    className="form-control" 
                                    maxLength="200"
                                    value={biografia}
                                    onChange={handleBiografiaChange}
                                ></textarea>
                                <span className="char-counter" id="counter">
                                    {biografia.length} / 200 caracteres
                                </span>
                            </div>
                        </div>

                        <div className="botaoAlterar">
                            <Link to="/conta">
                                <button type="button" className="cancelar">Cancelar</button>
                            </Link>

                            <Link to="/conta">
                                <button type="submit" className="salvar">Salvar Alterações</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default EditarPerfil;