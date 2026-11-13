
import React from "react";
import './Cientifico.css'

function Cientifico9 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>BOLDO</h1>
                    <p className="nomeC">(Plectranthus barbatus)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/boldo.webp" alt="Boldo" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Saúde Digestiva</span>
                        <span className="categoriaItem">Saúde Hepática</span>
                        <span className="categoriaItem">Ação Antioxidante</span>
                        <span className="categoriaItem">Bem-estar Gastrointestinal</span>
                        <span className="categoriaItem">Ação Anti-inflamatória</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico do Boldo</h1> 
                    
                    <p>O boldo (Plectranthus barbatus), também conhecido como boldo-brasileiro, é uma planta medicinal pertencente à família Lamiaceae. Tradicionalmente utilizada para auxiliar na digestão e na saúde do fígado, o boldo possui compostos bioativos que despertam interesse científico por suas propriedades digestivas e antioxidantes.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Plectranthus barbatus</li>
                            <li><strong>Família:</strong> Lamiaceae</li>
                            <li><strong>Origem:</strong> África Tropical, amplamente cultivado no Brasil</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Forscolina:</strong> Composto bioativo estudado por seus efeitos fisiológicos.</li>
                            <li><strong>Óleos Essenciais:</strong> Responsáveis pelo aroma característico da planta.</li>
                            <li><strong>Flavonoides:</strong> Compostos antioxidantes que auxiliam na proteção celular.</li>
                            <li><strong>Taninos:</strong> Substâncias com propriedades adstringentes.</li>
                            <li><strong>Diterpenos:</strong> Compostos naturais presentes em suas folhas.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Digestiva:</strong> Tradicionalmente utilizado para auxiliar na digestão.</li>
                            <li><strong>Ação Hepatoprotetora:</strong> Associado à proteção e ao funcionamento saudável do fígado.</li>
                            <li><strong>Ação Antioxidante:</strong> Auxilia no combate aos radicais livres.</li>
                            <li><strong>Ação Anti-inflamatória:</strong> Pode contribuir para a redução de inflamações leves.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico9;
