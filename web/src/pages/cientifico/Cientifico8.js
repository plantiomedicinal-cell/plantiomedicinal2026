
import React from "react";
import './Cientifico.css'

function Cientifico8 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>HORTELÃ</h1>
                    <p className="nomeC">(Mentha spicata)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/hortela.webp" alt="Hortelã" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Saúde Digestiva</span>
                        <span className="categoriaItem">Ação Antioxidante</span>
                        <span className="categoriaItem">Ação Antimicrobiana</span>
                        <span className="categoriaItem">Bem-estar Respiratório</span>
                        <span className="categoriaItem">Sensação Refrescante</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico da Hortelã</h1> 
                    
                    <p>A hortelã (Mentha spicata) é uma planta aromática pertencente à família Lamiaceae, amplamente utilizada na culinária, na indústria farmacêutica e na medicina tradicional. Conhecida por seu aroma refrescante, a hortelã possui compostos bioativos que apresentam propriedades digestivas, antioxidantes e antimicrobianas.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Mentha spicata</li>
                            <li><strong>Família:</strong> Lamiaceae</li>
                            <li><strong>Origem:</strong> Europa e Ásia Ocidental</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Mentol:</strong> Composto responsável pela sensação refrescante característica.</li>
                            <li><strong>Mentona:</strong> Substância aromática presente no óleo essencial.</li>
                            <li><strong>Flavonoides:</strong> Compostos antioxidantes que ajudam na proteção celular.</li>
                            <li><strong>Ácido Rosmarínico:</strong> Possui propriedades antioxidantes e anti-inflamatórias.</li>
                            <li><strong>Taninos:</strong> Compostos naturais com propriedades adstringentes.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Digestiva:</strong> Tradicionalmente utilizada para auxiliar na digestão.</li>
                            <li><strong>Ação Antioxidante:</strong> Auxilia no combate aos radicais livres.</li>
                            <li><strong>Ação Antimicrobiana:</strong> Pode contribuir para o controle de alguns microrganismos.</li>
                            <li><strong>Ação Refrescante:</strong> Promove sensação de frescor e bem-estar.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico8;
