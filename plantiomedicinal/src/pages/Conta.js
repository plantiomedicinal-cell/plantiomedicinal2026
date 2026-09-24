import React from 'react';
import './Conta.css'

function Conta() {
    return (
        <div className="perfilContainer">
            <div className="perfilTopo">
                <div className="perfilFoto">
                    <img src="/img/.." alt="foto de perfil"/>
                </div> 
                <div className="perfilInfo">
                    <span className="apelido">@nomedousuario</span>
                    <h1>Usuario</h1>
                    <p>usuario@gmail.com</p>
                </div>

            </div>

            <div className="dados">
                <h2>Dados da Conta</h2>

                <div className="campoPerfil">
                    <label>Nome</label>
                    <input type="text" value="usuario" readOnly/>
                </div>

                <div className="campoPerfil">
                    <label>Apelido</label>
                    <input type="text" value="@nomedousuario" readOnly/>
                </div>

                <div className="campoPerfil">
                    <label>E-mail</label>
                    <input type="email" value="usuario@gmail.com" readOnly/>
                </div>

                <div className="campoSenha"> 
                    <label>Senha</label>
                    <input type="password" value="12345678" readOnly /> 
                    <i className="bi bi-eye"></i> 
                </div> 

                <div className='botoesConta'>
                <button className="btn-editar"> Editar alterações </button>
                <button className="btn-salvar"> Salvar alterações </button>
                </div>
            </div> 
             
        </div>
    );
}

export default Conta;