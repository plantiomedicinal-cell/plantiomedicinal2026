import React from "react";
import "./Receita1.css";

function Receita1(){
    return(
        <main className="mainReceitas">
            
            <section className="principal">
                <div className="nomeReceita">

                    <button className="voltar">
                      <i class="bi bi-caret-left-fill"></i>
                      <b> Voltar para a lista de receitas.</b>
                    </button>
                    <h1>
                        Chá de Hortelã
                    </h1>
                    <p>Publicado por Ana - Tempo de preparo: 10min - Dificuldade: Fácil</p>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4>Rendimento</h4>
                        <p>1 xícaras</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4>Categoria</h4>
                        <p>Infusão herbal</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4>Benefícios</h4>
                        <ul>
                            <li>Melhora a digestão</li>
                            <li>Alivia gasesa e cólicas</li>
                            <li>Combate máu hálito</li>
                        </ul>
                    </div>
                </div>

                <hr className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>5 a 10 folhas frescas de hortelã;</li>
                            <li>200 ml de água filtrada;</li>
                            <li>Opcional: mel, açúcar ou adoçante a gosto</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave bem as folhas de hortelã em agua corrente para remover sujeira ou impurezas</li>
                        <li>Aqueça a água até quase ferver. Evite ferver as folhas junto com a água, pois isso pode amargar o chá e destruir os óleos essenciais</li>
                        <li>Despeje a água quente sobre as folhas em uma xícara ou bule resistente ao calor</li>
                        <li>Tampe e deixe em infusão por 5 a 10 minutos, dependendo da intensidade desejada.</li>
                        <li>Coe o chá para remover as folhas e sirva. Adicione mel, açúcar ou limão se desejar.</li>
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

export default Receita1;