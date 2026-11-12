import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita18(){
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
                        Óleo de Lavanda
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
                            <li>Calmante e relaxante</li>
                            <li>Melhora o sono</li>
                            <li>Ação cicatrizante e anti-inflamatória</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>2 a 3 colheres de sopa de flores de lavanda (alfazema) secas;</li>
                            <li>1 xícara de óleo vegetal;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Se usar lavanda fresca, deixe-as secar completamente antes de começar (qualquer umidade faz o óleo mofar).</li>
                        <li> Adicione as flores secas de lavanda em um pote de vidro limpo, seco e esterilizado.</li>
                        <li>Despeje o óleo vegetal escolhido até cobrir totalmente as flores, deixando um pequeno espaço no topo.</li>
                        <li>4.  Tampe bem o pote e guarde-o em um local fresco e escuro por cerca de 2 a 4 semanas, agitando levemente o frasco a cada dois dias. (Se preferir acelerar, você pode aquecer o óleo em banho-maria em fogo baixíssimo por cerca de 30 a 60 minutos, sem deixar ferver).</li>
                        <li> Após o período de descanso, passe o óleo por uma peneira fina ou pano limpo, espremendo bem as flores. Guarde em um frasco de vidro escuro.</li>
                        
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Utilize de preferência em até 30 a 45 dias e descarte se notar alteração no cheiro ou na cor.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita18;