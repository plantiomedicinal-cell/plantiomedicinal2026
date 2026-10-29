import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita2(){
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
                        Chá de Erva-Cidreira e Camomila
                    </h1>
                    <p className="descricaopublicacao">Publicado por Gabriela - Tempo de preparo: 10min - Dificuldade: Fácil</p>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">1 xícara</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Infusão de Ervas</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Ajuda no relaxamento</li>
                            <li>Alivia dores estomacais</li>
                            <li>Alivia gases</li>
                        </ul>
                    </div>
                </div>

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>10 a 15 folhas frescas de Erva-Cidreira;</li>
                            <li>1 colher de sopa flores frescas de Camomila;</li>
                            <li>250 ml de água filtrada;</li>
                            <li>Opcional: mel, açúcar ou adoçante a gosto</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave bem as folhas e flores em água corrente antes do preparo</li>
                        <li>Amasse levemente as folhas de erva-cidreira com as mãos antes de colocar na água para liberar melhor os óleos essenciais e o aroma.</li>
                        <li>Coloque em infusão assim que desligar o fogo, abafando bem por 10 minutos para extrair todas as propriedades relaxantes</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Beba 30 minutos antes de se deitar para melhor resultado.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita2;