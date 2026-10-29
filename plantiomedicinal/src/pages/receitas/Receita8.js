import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita8(){
    return(
        <main className="mainReceitas">
            
            <section className="principal">
                <div className="nomeReceita">

                     <Link to="/receitas">
                     <button className="voltar">
                       <i class="bi bi-caret-left-fill"></i>
                       <b> Voltar para a lista de receitas.</b>
                     </button>
                     </Link>
                     
                    <h1 className="tituloreceita">
                        Xarope natural de Gengibre com Mel
                    </h1>
                    <p className="descricaopublicacao">Publicado por Gabriela - Tempo de preparo: 10min - Dificuldade: Fácil</p>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">250 ml</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Remédios Caseiros</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Ação anti-inflamatória</li>
                            <li>Fortalece o sistema imunológico</li>
                            <li>Alivia tosses</li>
                        </ul>
                    </div>
                </div>

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>1 pedaço médio de gengibre fresco;</li>
                            <li>1 xícara de mel;</li>
                            <li>Opcional:1 suco de limão</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave bem a raiz do gengibre e corte-a em rodelas finas ou rale para facilitar a liberação dos compostos ativos.</li>
                        <li>Coloque as fatias de gengibre em um pote de vidro esterilizado com tampa. Se desejar, adicione o suco do limão.</li>
                        <li>Despeje o mel puro por cima do gengibre até cobrir totalmente as fatias.</li>
                        <li>Tampe o pote e guarde na geladeira ou em um local fresco e escuro por 24 a 48 horas antes de começar a usar.</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Ao retirar o xarope do pote, use sempre uma colher limpa e completamente seca.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita8;