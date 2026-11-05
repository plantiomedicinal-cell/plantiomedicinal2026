import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita16(){
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
                        Óleo de Hortelã
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

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>1 xícara de folhas frescas de hortelã;</li>
                            <li>1 xícara de óleo vegetal;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave as folhas de hortelã e seque-as perfeitamente com um pano limpo ou papel toalha. Não pode restar água, pois a umidade faz o óleo mofar.</li>
                        <li> Coloque as folhas em um saquinho plástico limpo ou use um pilão para esmagá-las de leve. Isso quebra as células da planta e ajuda a liberar os óleos naturais.</li>
                        <li>Transfira a hortelã amassada para um pote de vidro esterilizado com tampa.</li>
                        <li>Despeje o óleo vegetal escolhido até cobrir totalmente as folhas. Mexa com uma colher para tirar eventuais bolhas de ar.</li>
                        <li>Feche bem o pote e guarde-o em um local escuro e arejado por cerca de 4 a 7 dias (agitando o potinho levemente uma vez ao dia).</li>
                        <li> Após o período de descanso, passe o óleo por uma peneira fina ou pano limpo, espremendo bem as folhas. Guarde o óleo em um frasco de vidro escuro com tampa em local fresco.</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Por ser mentolado, mantenha longe da região dos olhos e de mucosas, pois pode arder.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita16;