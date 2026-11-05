import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita15(){
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
                        Banho de Alecrim
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
                            <li>Alívio de dores de cabeça</li>
                            <li>Combate a insônia</li>
                            <li>Reduz a ansiedade e o estresse</li>
                        </ul>
                    </div>
                </div>

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>4 colheres de sopa de erva-cidreira seca;</li>
                            <li>1 litro de água;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Coloque o litro de água em uma panela e leve ao fogo até começar a ferver.</li>
                        <li>Desligue o fogo, adicione as folhas de erva-cidreira e tampe a panela. Deixe descansar por 10 a 15 minutos.</li>
                        <li>Passe o líquido por uma peneira para retirar as folhas e descarte-as</li>
                        <li>Deixe esfriar um pouco até que fique em uma temperatura morna e agradável para a pele.
</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> O melhor momento para tomar o banho de erva-cidreira é à noite, logo antes de deitar.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita15;