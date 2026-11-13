
import React from "react";
import './Cientifico.css'

function Cientifico2 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>ALECRIM</h1>
                    <p className="nomeC">(Salvia rosmarinus)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/alecrim.webp" alt="Alecrim" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Imunológica</span>
                        <span className="categoriaItem">Cuidado da Pele</span>
                        <span className="categoriaItem">Cognição e Foco</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico do Alecrim</h1> 
                    
                    <p>O alecrim (Salvia rosmarinus) é um subarbusto aromático da família Lamiaceae, originário da região do Mediterrâneo.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Salvia rosmarinus</li>
                            <li><strong>Família:</strong> Lamiaceae</li>
                            <li><strong>Origem:</strong> Região do Mediterrâneo</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Ácido Carnósico e Rosmarínico:</strong> Antioxidantes naturais.</li>
                            <li><strong>1,8-Cineol e Cânfora:</strong> Compostos do óleo essencial com ação antimicrobiana.</li>
                            <li><strong>Ácido Ursólico:</strong> Ativo com ação anti-inflamatória.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Antioxidante:</strong> Combate o envelhecimento celular.</li>
                            <li><strong>Efeito Neuroprotetor:</strong> Auxilia na melhora da memória e cognição.</li>
                            <li><strong>Antimicrobiano:</strong> Inibe o crescimento de fungos e bactérias.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico2;
