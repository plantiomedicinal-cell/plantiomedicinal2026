import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita5(){
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
                            <li>Saúde da pele e bronzeado</li>
                            <li>Fortalece a imunidade</li>
                            <li>Proteção da visão</li>
                        </ul>
                    </div>
                </div>

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>2 laranjas médias;</li>
                            <li>1 cenoura média;</li>
                            <li>100 ml de água gelada;</li>
                            <li>Opcional:Gelo, mel ou adoçante a gosto;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Descasque a cenoura e corte-a em rodelas pequenas para facilitar na hora de bater. Esprema as laranjas e coe o suco, se preferir sem bagaço.</li>
                        <li>Coloque as rodelas de cenoura, o suco de laranja e a água gelada no liquidificador. Bata em potência máxima por cerca de 2 minutos até que a cenoura esteja totalmente triturada.</li>
                        <li>Se quiser uma textura mais leve, passe o suco por uma peneira fina. Caso prefira aproveitar todas as fibras da cenoura, beba sem coar.</li>
                        <li>Adicione gelo e adoçue apenas se achar necessário. Beba logo em seguida para aproveitar o máximo de vitaminas.</li>
                        

                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Adicione uma pitada de cúrcuma com pimenta-preta moída para transformar essa bebida em um poderoso suco anti-inflamatório.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita5;