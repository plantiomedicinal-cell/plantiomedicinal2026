import React from "react";
import {Link}  from "react-router-dom";
import './Receitas.css';



function Receitas() {
  return (
    <main className="inicioReceita">
    <div className="receita">
      <h1 className="tituloReceita">Conheça as principais <strong>RECEITAS MEDICINAIS</strong></h1>
    </div>

    <div className="fraseReceita">
      <p>Principais receitas medicinais reunindo preparos naturais como chás, xaropes e infusões, com orientações simples para uso no dia a dia. Uma forma prática de aproveitar os benefícios das plantas para o bem-estar.</p>
    </div>

    <div className="barraPesquisa">
        <input type="text" id="pesquisaReceitas" placeholder=" Pesquisar receitas"/>
    </div>

    <hr></hr>

    <div className="receitas">
    <div className="titulo">
      <h3>Chás</h3>
      <ul>
        <li><a href="recChá1.js">Chá de Hortelã</a></li>
        <li><a href="recChá2.js">Chá de Camomila</a></li> 
        <li><a href="recChá3.js">Chá de Gengibre</a></li> 
      </ul>
    </div>

     <div className="titulo">
      <h3>Sucos</h3>
      <ul>
        <li><a href="recSuco1.js">Suco de Detox Verde</a></li>
        <li><a href="recSuco2.js">Suco de Cenoura com Laranja</a></li> 
        <li><a href="recSuco3.js">Suco de Abacaxi com Hortelã</a></li> 
      </ul>
    </div>

    <div className="titulo">
      <h3>Xaropes</h3>
      <ul>
        <li><a href="recXar1.js">Xarope de Mel com Limão</a></li>
        <li><a href="recXar2.js">Xarope de Gengibre</a></li> 
        <li><a href="recXar3.js">Xarope de Alho</a></li> 
      </ul>
    </div>

    <div className="titulo">
      <h3>Pomadas</h3>
      <ul>
        <li><a href="recPom1.js">Pomada de Babosa</a></li>
        <li><a href="recPom2.js">Pomada de Calêndula</a></li> 
        <li><a href="recPom3.js">Pomada de Ervas</a></li> 
      </ul>
    </div>

    <div className="titulo">
      <h3>Banhos Medicinais</h3>
      <ul>
        <li><a href="recBanho1.js">Banho de Camomila</a></li>
        <li><a href="recBanho2.js">Banho de Alecrim</a></li> 
        <li><a href="recBanho3.js">Banho de Erva Cidreira</a></li> 
      </ul>
    </div>

    <div className="titulo">
      <h3>Óleos Medicinais</h3>
      <ul>
        <li><a href="recOleo1.js">Óleo de Hortelã</a></li>
        <li><a href="recOleo2.js">Óleo de Alecrim</a></li> 
        <li><a href="recOleo3.js">Óleo de Lavanda</a></li> 
      </ul>
    </div>





    </div>

    </main>


  );
}

export default Receitas;