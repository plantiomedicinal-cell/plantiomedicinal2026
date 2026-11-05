import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita13(){
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
                        Banho de Camomila
                    </h1>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">1 banho</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Terapias naturais</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Efeito relaxante e calmante</li>
                            <li>Melhora o sono</li>
                            <li>Alivia irritações na pele</li>
                        </ul>
                    </div>
                </div>

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>4 colheres de sopa de flores de camomila secas;</li>
                            <li>1 litro de água;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Coloque o litro de água em uma panela e leve ao fogo até começar a ferver.</li>
                        <li>Desligue o fogo, adicione as flores de camomila e tampe a panela. Deixe descansar por 10 a 15 minutos.</li>
                        <li>Passe o líquido por uma peneira para retirar as flores e descarte-as.</li>
                        <li>Deixe o líquido esfriar um pouco até que fique em uma temperatura morna e agradável para a pele.</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> O melhor momento para tomar o banho de camomila é à noite, logo antes de ir para a cama.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita13;