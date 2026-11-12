import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita7(){
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
                        Xarope de Mel com Limão
                    </h1>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">250 a 300 ml</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Remédios caseiros</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Alívio da tosse</li>
                            <li>Alta dose de vitamina C</li>
                            <li>Efeito expectorante</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>1 xícara de mel puro;</li>
                            <li>1 limão;</li>
                            <li>Opcional: 8 a 10 gotas de extrato de própolis ou um pedaço pequeno de gengibre ralado;</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Lave bem a casca do limão e corte-o ao meio.</li>
                        <li>Em um pote de vidro limpo com tampa, esprema o suco do limão e despeje o mel. Se estiver usando rodelas ou gengibre, faça camadas alternadas.</li>
                        <li>Tampe o pote e deixe descansar por algumas horas (ou na geladeira de um dia para o outro) para que o limão e o mel incorporem bem.</li>
                        <li>Tome de 1 a 2 colheres de sopa ao dia, pures ou diluídas em um pouco de água morna.</li>
                        

                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Beba preferencialmente à noite.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita7;