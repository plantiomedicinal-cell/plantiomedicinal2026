
import { Link } from 'react-router-dom';
import './Conta.css';

function EditarPerfil() {
    return (
    <div className='editarContainer'>
        <div className='editarPerfil'>
            <div className='cabecalhoPerfil'>
            <h1>Editar Perfil</h1>
            <p>Atualize suas informações pessoais e preferências da conta.</p>

            <hr className='divisao3'/>

            <div className='editarFoto'>
                <img
                        className="perfilFoto"
                        src="/img/perfil1.png"
                        alt="Foto de perfil"
                    />

                <div className='botaoEditar'>
                    <div className='botoes'>
                    <button className='alterar'>Alterar Foto</button>
                    <button className='remove'>Remover</button>
                </div>

                    <p>JPG ou PNG. Tamanho máximo de 5MB.</p>
                </div>
            </div>

            <hr className='divisao3'/>

            <form class="alteracoesPerfil">
                <div class="formPerfil">
                <div class="grupoForm">
                    <label for="nome">Nome Completo</label>
                    <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    class="form-control" 
                    value="Ana Silva" 
                    placeholder="O seu nome completo"
                    />
                </div>

                <div class="grupoForm">
                    <label for="username">Nome de Usuário (@)</label>
                    <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    class="form-control" 
                    value="anasilva_horta" 
                    placeholder="username"
                    />
                </div>
                </div>

                <div class="grupoForm">
                <label for="email">E-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="form-control" 
                    value="ana.silva@email.com" 
                    placeholder="seu.email@exemplo.com"
                />
                </div>

                <div class="grupoForm">
                <label for="biografia">Biografia</label>
                <div class="textareaPerfil">
                    <textarea 
                    id="biografia" 
                    name="biografia" 
                    class="form-control" 
                    maxlength="200"
                    oninput="updateCounter(this)"
                    >Cultivo ervas medicinais em casa e compartilho receitas de xaropes e chás naturais.</textarea>
                    <span class="char-counter" id="counter">84 / 200 caracteres</span>
                </div>
                </div>

                <div className='botaoAlterar'>

                    <Link to="/conta">
                    <button className='cancelar'>Cancelar</button>
                    </Link>

                    <Link to="/conta">
                    <button className='salvar'>Salvar Alterações</button>
                    </Link>
                </div>
            </form>

            </div>
        </div>
    </div>
    );
};

export default EditarPerfil;