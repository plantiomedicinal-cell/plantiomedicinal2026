import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita6(){
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
                        Suco de Abacaxi com Hortelã
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
                            <li>Refrescante e calmante</li>
                            <li>Ação anti-inchaço</li>
                            <li>Digestivo natural</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>2 fatias grossas de abacaxi;</li>
                            <li>10 a 12 folhas de hortelã fresca;</li>
                            <li>200 a 300 ml de água gelada;</li>
                            <li>Opcional:Gelo, mel ou adoçante a gosto;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Descasque o abacaxi e corte-as em pedaços menores para facilitar na hora de bater. Lave bem as folhas de hortelã.</li>
                        <li>Coloque o abacaxi picado, as folhas de hortelã e a água gelada no liquidificador. Bata em potência máxima por cerca de 1 a 2 minutos até triturar bem a hortelã e o abacaxi.</li>
                        <li>Se preferir uma textura completamente lisa, passe o suco por uma peneira fina. Para aproveitar todas as fibras, não coe.</li>
                        <li>Adicione gelo a gosto e beba logo em seguida para aproveitar o frescor e os nutrientes.</li>
                        

                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Use cascas de abacaxi fervidas em vez de água pura.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita6;