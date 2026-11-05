
import React from "react";
import './Cientifico.css'

function Cientifico6 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>GUACO</h1>
                    <p className="nomeC">(Mikania glomerata)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/guaco.webp" alt="Guaco" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Saúde Respiratória</span>
                        <span className="categoriaItem">Ação Expectorante</span>
                        <span className="categoriaItem">Ação Broncodilatadora</span>
                        <span className="categoriaItem">Ação Anti-inflamatória</span>
                        <span className="categoriaItem">Ação Antioxidante</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico do Guaco</h1> 
                    
                    <p>Estudos com guaco (Mikania glomerata e Mikania laevigata) investigam principalmente seus efeitos sobre o sistema respiratório. Pesquisas pré-clínicas apontam potencial anti-inflamatório, broncodilatador e expectorante, associado a compostos como a cumarina. Porém, revisões recentes destacam que ainda são necessários mais estudos clínicos para confirmar algumas dessas aplicações em humanos.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Mikania glomerata</li>
                            <li><strong>Família:</strong> Asteraceae</li>
                            <li><strong>Origem:</strong> América do Sul, especialmente Brasil</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Cumarina:</strong> Principal composto bioativo associado às propriedades respiratórias.</li>
                            <li><strong>Flavonoides:</strong> Compostos antioxidantes que auxiliam na proteção celular.</li>
                            <li><strong>Taninos:</strong> Substâncias com propriedades adstringentes.</li>
                            <li><strong>Óleos Essenciais:</strong> Compostos aromáticos presentes nas folhas.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Expectorante:</strong> Auxilia na eliminação de secreções das vias respiratórias.</li>
                            <li><strong>Ação Broncodilatadora:</strong> Pode favorecer a passagem do ar pelos brônquios.</li>
                            <li><strong>Ação Anti-inflamatória:</strong> Contribui para o alívio de inflamações leves.</li>
                            <li><strong>Ação Antioxidante:</strong> Auxilia na proteção das células contra danos oxidativos.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico6;
