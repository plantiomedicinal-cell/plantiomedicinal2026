import React from "react";
import { Link } from "react-router-dom";
import "./Receita.css";

function Receita11(){
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
                        Pomada de Calêndula
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
                            <li>Poderoso efeito cicatrizante</li>
                            <li>Excelente para assaduras</li>
                            <li>Tratamento para pele muito seca ou rachada</li>
                        </ul>
                    </div>
                </div>

                <div className="divisao5" />

                    <h2 className="titulopreparo">Ingredientes</h2>
                <section className="cardingredientes">
                        <ul>
                            <li>2 colheres de sopa de flores de calêndula secas ;</li>
                            <li>1/2 xícara de óleo de coco extra virgem;</li>
                            <li>1 colher de sopa de cera de abelha ralada;</li>
                            <li>Opcional:  5 gotas de óleo essencial de lavanda</li>
                        </ul>
                </section>

                    <h2 className="titulopreparo">Modo de Preparo</h2>
                <section className="modopreparo">
                    <ol>
                        <li>Em um recipiente de vidro resistente ao calor, coloque o óleo de coco (ou azeite) e as flores secas de calêndula. Leve ao banho-maria em fogo bem baixo por cerca de 1 hora. Não deixe a água ferver vigorosamente; o óleo deve apenas aquecer suavemente para extrair as propriedades da planta sem queimá-la.</li>
                        <li>Desligue o fogo e coe o óleo ainda morno usando uma peneira fina ou um pano limpo, espremendo bem as flores para extrair todo o óleo medicinal. Descarte as flores.</li>
                        <li>Volte o óleo coado para o banho-maria e adicione a cera de abelha ralada. Mexa suavemente até que a cera derreta por completo e se misture ao óleo.</li>
                        <li>Retire do fogo. Se desejar, adicione o óleo essencial de lavanda neste momento e misture. Despeje o líquido ainda quente em um pote de vidro limpo e seco.</li>
                        <li>Deixe esfriar em temperatura ambiente sem tampar. À medida que esfria, a mistura vai endurecer e ganhar a consistência perfeita de pomada. Tampe após esfriar totalmente.
</li>
                    </ol>
                </section>

                <div className="dica">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p><b>Dica de uso:</b> Aplique uma camada fina e realize massagens suaves.</p>
                </div>

            </section>
        </main>
    );

}

export default Receita11;