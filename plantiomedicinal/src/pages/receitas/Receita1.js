import React from "react";
import "./Receita1.css";

function Receita1(){
    return(
        <main>
            <section className="titulo1">
            <h1> Chá de Hortelã</h1>
            <p>Siga as nossas orientações e surpreenda-se com o resultado!</p>
            </section>

            <hr className="divisao2"></hr>

            <section className="conteudo">
                <div className="FichaTec">
                 <h2>Ficha Técnica:</h2>
                <ul>
                    <li><b>Categoria:</b> Chás Medicinais</li>
                    <li><b>Tempo:</b> Em torno de 10 minutos para ficar pronto.
                    </li>
                </ul>
                </div>

                <div className="beneficios">
                 <h2>Benefícios</h2>
                <ul>
                    <li><b>Alivía dores de cabeça:</b>O chá de hortelã alivia dores de cabeça e enxaquecas porque age como analgésico, anti-inflamatório e relaxante muscular.</li>

                    <li><b>Trata problemas digestivos:</b> O chá de hortelã alivia dores, gases, inchaço, náuseas e vômitos ao relaxar os músculos do estômago e do intestino. Além disso, ele melhora a digestão ao estimular a secreção de bile pelo fígado e ajuda a atenuar os sintomas da síndrome do intestino irritável.
                    </li>
                </ul>
                </div>
                
            </section>
        </main>
    );

}

export default Receita1;