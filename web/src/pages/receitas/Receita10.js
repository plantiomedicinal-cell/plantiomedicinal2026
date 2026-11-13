import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita10(){
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
                        Pomada de Babosa
                    </h1>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">40 a 50g</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Cosméticos naturais</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Poderoso efeito cicatrizante</li>
                            <li>Alívio imediato de queimaduras</li>
                            <li>Hidratação profunda</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>2 colheres de sopa de gel de babosa;</li>
                            <li>1 colher de sopa de óleo de coco extra virgem;</li>
                            <li>Opcional: 1 cápsula de vitamina E ou 3 a 5 gotas de óleo essencial de lavanda/alecrim (para dar aroma e ação calmante).</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li> Corte a base da folha de babosa e deixe-a em pé de 15 a 30 minutos para escorrer o líquido amarelado e tóxico.</li>
                        <li> Lave bem a folha, retire os espinhos laterais com uma faca e raspe apenas o gel transparente do interior, descartando a casca.</li>
                        <li> Coloque o gel em um recipiente ou mini processador e bata bem até ficar com uma textura homogênea e levemente espumosa.</li>
                        <li>Adicione o óleo de coco (que deve estar em consistência de pasta ou levemente amolecido) e a vitamina E. Misture vigorosamente até formar um creme ou pomada uniforme.</li>
                        <li> Transfira para um potinho de vidro com tampa esterilizado. Como é uma receita 100% natural sem conservantes químicos, guarde na geladeira e use em até 7 dias.</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Faça um teste de alergia antes de usar, de preferencia à noite.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita10;