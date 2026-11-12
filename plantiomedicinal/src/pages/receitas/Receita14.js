import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita14(){
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
                            <li>Melhora o foco e a memória</li>
                            <li>Alívio de dores musculares</li>
                            <li>Combate a oleosidade e caspa</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>3 colheres de sopa de alecrim seco;</li>
                            <li>1 litro de água;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Coloque o litro de água para ferver em uma panela.</li>
                        <li>Assim que a água levantar fervura, desligue o fogo, adicione o alecrim e tampe a panela. Deixe descansar por 10 minutos.</li>
                        <li>Passe o líquido por uma peneira para retirar as folhas e descarte-as.</li>
                        <li>Espere esfriar até ficar morno e agradável para a pele.</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Banho de alecrim deve ser tomado pela manhã ou à tarde, pois ele dá energia e pode espantar o sono se tomado à noite.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita14;