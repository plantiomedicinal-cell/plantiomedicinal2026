import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita17(){
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
                        Óleo de Alecrim
                    </h1>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">200ml</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Cosméticos naturais</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Alívio de dores musculares e tensões</li>
                            <li>Hidratação e frescor para a pele</li>
                            <li>Aromaterapia e relaxamento</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>2 a 3 ramos de alecrim fresco bem seco;</li>
                            <li>1 xícara de azeite de oliva extra virgem;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave os ramos de alecrim e seque-os perfeitamente com um pano ou papel toalha.</li>
                        <li>Adicione as folhas de alecrim em um pote de vidro limpo e seco.</li>
                        <li>Despeje o azeite até cobrir totalmente as folhas.</li>
                        <li>Coloque o pote de vidro (ou uma panela pequena com a mistura) em banho-maria em fogo bem baixo por cerca de 20 a 30 minutos, sem deixar ferver. Isso acelera a extração das propriedades da planta.</li>
                        <li>Desligue o fogo, espere esfriar e deixe descansar por 24 a 48 horas (ou de 1 a 2 semanas em um local escuro para uma versão mais concentrada). Depois, coe usando uma peneira fina ou um pano limpo e guarde em um frasco escuro com tampa.</li>
                        
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Antes de aplicar no couro cabeludo ou na pele, passe uma gotinha no antebraço e aguarde 20 minutos para garantir que não há irritação.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita17;