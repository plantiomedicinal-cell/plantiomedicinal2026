
import React from "react";
import './Cientifico.css'

function Cientifico3 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>PIMENTA MACACO</h1>
                    <p className="nomeC">(Piper aduncum)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/pimentamacaco.webp" alt="Pimenta Macaco" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Ação Antimicrobiana</span>
                        <span className="categoriaItem">Ação Anti-inflamatória</span>
                        <span className="categoriaItem">Ação Antioxidante</span>
                        <span className="categoriaItem">Cuidados com a Pele</span>
                        <span className="categoriaItem">Repelente Natural</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico da Pimenta Macaco</h1> 
                    
                    <p>A pimenta-de-macaco (Piper aduncum) é uma planta medicinal pertencente à família Piperaceae, amplamente distribuída nas regiões tropicais da América do Sul. Tradicionalmente utilizada por comunidades indígenas e populações rurais, tem despertado interesse científico devido às suas propriedades antimicrobianas, anti-inflamatórias e repelentes naturais.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Piper aduncum</li>
                            <li><strong>Família:</strong> Piperaceae</li>
                            <li><strong>Origem:</strong> América Tropical, especialmente Brasil, Peru e Amazônia</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Dilapiol:</strong> Principal composto do óleo essencial, com ação inseticida e antimicrobiana.</li>
                            <li><strong>Flavonoides:</strong> Compostos antioxidantes que auxiliam na proteção celular.</li>
                            <li><strong>Taninos:</strong> Possuem ação adstringente e antimicrobiana.</li>
                            <li><strong>Terpenos:</strong> Substâncias presentes no óleo essencial com potencial terapêutico.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Antimicrobiana:</strong> Estudos demonstram atividade contra alguns fungos e bactérias.</li>
                            <li><strong>Ação Anti-inflamatória:</strong> Pode auxiliar na redução de inflamações leves.</li>
                            <li><strong>Ação Antioxidante:</strong> Contribui para a proteção das células contra os radicais livres.</li>
                            <li><strong>Ação Repelente:</strong> O óleo essencial é estudado como repelente natural contra insetos.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico3;
