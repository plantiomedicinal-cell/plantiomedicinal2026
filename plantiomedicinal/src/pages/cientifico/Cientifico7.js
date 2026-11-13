
import React from "react";
import './Cientifico.css'

function Cientifico7 () {
    return(
        <main>

            <section className="containerCientifico">            
                <div className="cientifico">
                    <h1>CAMOMILA</h1>
                    <p className="nomeC">(Matricaria chamomilla)</p>
                </div>

                <section className="informacoes">

                    <img className="imgCientifico" src="/img/plantas/camomila.webp" alt="Camomila" />
                    
                    <div className="categoriasPlantas">
                        <h2>Principais Benefícios:</h2>
                        <span className="categoriaItem">Ação Calmante</span>
                        <span className="categoriaItem">Qualidade do Sono</span>
                        <span className="categoriaItem">Saúde Digestiva</span>
                        <span className="categoriaItem">Ação Anti-inflamatória</span>
                        <span className="categoriaItem">Ação Antioxidante</span>
                    </div>
                </section>  

                <section className="blocoC">
                    <h1>Estudo Científico da Camomila</h1> 
                    
                    <p>A camomila (Matricaria chamomilla) é uma planta medicinal pertencente à família Asteraceae, amplamente utilizada em diversas culturas devido às suas propriedades calmantes e digestivas. Originária da Europa e da Ásia Ocidental, a camomila é uma das plantas mais estudadas e consumidas na forma de chá em todo o mundo.</p>

                    <div className="blocoT">
                        <h2>Classificação Botânica</h2>

                        <ul className="topicos">
                            <li><strong>Nome científico:</strong> Matricaria chamomilla</li>
                            <li><strong>Família:</strong> Asteraceae</li>
                            <li><strong>Origem:</strong> Europa e Ásia Ocidental</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Composição Química</h2>

                        <ul className="topicos">
                            <li><strong>Apigenina:</strong> Flavonoide associado às propriedades calmantes da planta.</li>
                            <li><strong>Bisabolol:</strong> Composto com potencial ação anti-inflamatória.</li>
                            <li><strong>Camazuleno:</strong> Substância presente no óleo essencial da camomila.</li>
                            <li><strong>Flavonoides:</strong> Compostos antioxidantes que auxiliam na proteção celular.</li>
                            <li><strong>Cumarinas:</strong> Substâncias naturais presentes em pequenas quantidades.</li>
                        </ul>
                    </div>

                    <div className="blocoA">
                        <h2>Propriedades Farmacológicas</h2>

                        <ul className="topicos">
                            <li><strong>Ação Calmante:</strong> Tradicionalmente utilizada para promover relaxamento.</li>
                            <li><strong>Ação Digestiva:</strong> Pode auxiliar no alívio de desconfortos gastrointestinais.</li>
                            <li><strong>Ação Anti-inflamatória:</strong> Contribui para a redução de inflamações leves.</li>
                            <li><strong>Ação Antioxidante:</strong> Auxilia na proteção das células contra os radicais livres.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Cientifico7;
