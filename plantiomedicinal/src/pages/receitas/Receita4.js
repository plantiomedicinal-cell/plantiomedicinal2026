import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita4(){
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
                        Suco Detox verde
                    </h1>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">1 copo grande</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Sucos</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Melhora a saúde intestinal</li>
                            <li>Acelera o metabolismo</li>
                            <li>Aumenta a energia</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>1 folha de couve;</li>
                            <li>1/2 maçã verde;</li>
                            <li>2 fatias de abacaxi;</li>
                            <li>1 pedaço pequeno de gengibre;</li>
                            <li>Suco de 1/2 limão;</li>
                            <li>200 ml de água gelada;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave bem a folha de couve, a maçã e o abacaxi.</li>
                        <li>Pique a maçã e o abacaxi em pedaços menores para facilitar na hora de bater.</li>
                        <li>Coloque todos os ingredientes no liquidificador(a couve, a maçã, o abacaxi, o gengibre, o suco de limão e a água gelada).</li>
                        <li>Bata em potência máxima por cerca de 1 a 2 minutos até obter uma mistura homogênea.</li>
                        <li>Beba logo após o preparo para aproveitar melhor os nutrientes (não é necessário coar para manter as fibras, mas você pode passar na peneira se preferir uma textura mais líquida).</li>

                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Variar os ingredientes e as frutas ao longo da semana para evitar a monotonia e garantir diferentes nutrientes.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita4;