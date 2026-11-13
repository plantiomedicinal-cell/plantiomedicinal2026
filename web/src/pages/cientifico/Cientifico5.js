
import React from "react";
import './Cientifico.css'

function Cientifico5 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>LOURO</h1>
                    <p className="nomeC">(Laurus nobilis)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/louro.webp" alt="Louro" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Saúde Digestiva</span>
                        <span className="categoriaItem">Ação Antioxidante</span>
                        <span className="categoriaItem">Bem-estar Respiratório</span>
                        <span className="categoriaItem">Ação Anti-inflamatória</span>
                        <span className="categoriaItem">Saúde Geral</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico do Louro</h1> 
                    
                    <p>O louro (Laurus nobilis) é uma planta aromática pertencente à família Lauraceae, amplamente utilizada na culinária e na medicina tradicional. Originário da região do Mediterrâneo, o louro é conhecido por suas folhas ricas em compostos bioativos que apresentam propriedades antioxidantes, digestivas e anti-inflamatórias.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Laurus nobilis</li>
                            <li><strong>Família:</strong> Lauraceae</li>
                            <li><strong>Origem:</strong> Região do Mediterrâneo</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Cineol:</strong> Composto presente no óleo essencial com propriedades aromáticas.</li>
                            <li><strong>Eugenol:</strong> Substância com potencial antioxidante e anti-inflamatório.</li>
                            <li><strong>Taninos:</strong> Compostos que auxiliam na proteção contra microrganismos.</li>
                            <li><strong>Flavonoides:</strong> Antioxidantes naturais que ajudam na proteção celular.</li>
                            <li><strong>Linalol:</strong> Componente aromático presente nas folhas.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Digestiva:</strong> Tradicionalmente utilizado para auxiliar na digestão.</li>
                            <li><strong>Ação Antioxidante:</strong> Contribui para a proteção das células contra os radicais livres.</li>
                            <li><strong>Ação Anti-inflamatória:</strong> Pode auxiliar na redução de inflamações leves.</li>
                            <li><strong>Ação Antimicrobiana:</strong> Alguns compostos apresentam atividade contra microrganismos.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico5;
