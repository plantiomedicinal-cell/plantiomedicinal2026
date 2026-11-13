import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita12(){
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
                        Pomada de Ervas
                    </h1>
                </div>

                <div className="cardscha">
                    <div className="fotoCha" id="filho1">
                    </div>
                    <div className="rendimento" id="filho2">
                        <h4 className="cardsh4">Rendimento</h4>
                        <p className="cardsp">120g</p>
                    </div>
                    <div className="categoria" id="filho3">
                        <h4 className="cardsh4">Categoria</h4>
                        <p className="cardsp">Cosméticos naturais</p>
                    </div>
                    <div className="beneficios" id="filho4">
                        <h4 className="cardsh4">Benefícios</h4>
                        <ul className="cardsul">
                            <li>Alívio de picadas e coceiras</li>
                            <li>Ação analgésica</li>
                            <li>Proteção contra infecções</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>1 colher de sopa de flores de calêndula secas;</li>
                            <li>1 colher de sopa de flores de camomila secas;</li>
                            <li>1 colher de chá de alecrim seco;</li>
                            <li>1/2 xícara de óleo de coco extra virgem</li>
                            <li>1 colher de sopa de cera de abelha ralada</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Em um pote de vidro resistente, junte o óleo de coco e todas as ervas secas. Leve ao banho-maria em fogo bem baixo por 1 hora para extrair as propriedades medicinais sem queimar as plantas.</li>
                        <li>Desligue o fogo e coe o óleo ainda morno usando um pano limpo ou gaze. Esprema muito bem para extrair todo o óleo enriquecido e descarte as ervas.</li>
                        <li>Devolva o óleo coado ao banho-maria e adicione a cera de abelha. Mexa suavemente até que a cera derreta por completo.</li>
                        <li>Retire do fogo e despeje o líquido em um pote de vidro limpo e seco. Deixe esfriar destampado até endurecer e ganhar a consistência de pomada.</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Passe um pouco na pele limpa sempre que tiver algum machucado, coceira ou dor.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita12;