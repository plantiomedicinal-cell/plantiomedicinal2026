import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita3(){
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
                        Chá de Gengibre
                    </h1>
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
                        <p className="cardsp">Infusão</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Melhora a disgestão</li>
                            <li>Acelera o metabolismo</li>
                            <li>Alívio de sintomas respiratórios</li>
                        </ul>
                    </div>
                </div>

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>2 a 3 cm de gengibre fresco;</li>
                            <li>250 ml de água filtrada;</li>
                            <li>Opcional: mel, limão ou adoçante a gosto</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave bem a raiz de gengibre e corte-a em fatias finas ou rale-a.</li>
                        <li>Coloque a água e o gengibre em uma panela ou chaleira. Deixe ferver em fogo médio/baixo por cerca de 5 a 10 minutos.</li>
                        <li>Desligue o fogo, tampe a panela e deixe em infusão por mais 2 minutos para apurar o sabor.</li>
                        <li>Coe a bebida em uma xícara. Se desejar, adicione gotas de limão e uma colher de mel para suavizar o sabor.</li>

                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> O consumo em excesso pode causar irritação gástrica ou azia</p>
                </div>

            </section>
        </main>
    );

}

export default Receita3;