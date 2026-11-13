import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita9(){
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
                        Xarope de alho
                    </h1>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">100 ml</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Remédios Caseiros</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Poderoso antibiótico</li>
                            <li>Ação expectorante</li>
                            <li>Fortalecimento do sistema imunológico</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>1 cabeça de alho;</li>
                            <li>5 colheres de sopa de mel puro;</li>
                            <li>Opcional: 1 limão espremido ou algumas rodelas de gengibre para potencializar</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Descasque os dentes de alho e amasse-os levemente com a faca.</li>
                        <li>Coloque os dentes de alho em um pote de vidro limpo e esterilizado.</li>
                        <li>Despeje o mel por cima, garantindo que todo o alho fique completamente submerso (se optar por usar o limão ou gengibre, adicione agora).</li>
                        <li>Feche o pote e deixe descansar por pelo menos 24 horas (ou até alguns dias) em temperatura ambiente para que o alho solte seus princípios ativos no mel.</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Evite o estômago vazio se tiver sensibilidade.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita9;