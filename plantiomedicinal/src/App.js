// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// componentes
import Header from './components/Header';


// navegação
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Receitas from './pages/Receitas';
import Catalogo from './pages/Catalogo';
import Postagens from './pages/Postagens';
import Conta from './pages/Conta';


// receitas
import Receita1 from './pages/receitas/Receitas1';
// import Receita2 from './pages/receitas/Receitas2';
// import Receita3 from './pages/receitas/Receitas3';
// import Receita4 from './pages/receitas/Receitas4';
// import Receita5 from './pages/receitas/Receitas5';
// import Receita6 from './pages/receitas/Receitas6';
// import Receita7 from './pages/receitas/Receitas7';
// import Receita8 from './pages/receitas/Receitas8';
// import Receita9 from './pages/receitas/Receitas9';
// import Receita10 from './pages/receitas/Receitas10';
// import Receita11 from './pages/receitas/Receitas11';
// import Receita12 from './pages/receitas/Receitas12';
// import Receita13 from './pages/receitas/Receitas13';
// import Receita14 from './pages/receitas/Receitas14';
// import Receita15 from './pages/receitas/Receitas15';
// import Receita16 from './pages/receitas/Receitas16';
// import Receita17 from './pages/receitas/Receitas17';
// import Receita18 from './pages/receitas/Receitas18';

// cientificos
// import Cientifico1 from './pages/cientifico/Cientifico1';
// import Cientifico2 from './pages/cientifico/Cientifico2';
// import Cientifico3 from './pages/cientifico/Cientifico3';
// import Cientifico4 from './pages/cientifico/Cientifico4';
// import Cientifico5 from './pages/cientifico/Cientifico5';
// import Cientifico6 from './pages/cientifico/Cientifico6';
// import Cientifico7 from './pages/cientifico/Cientifico7';
// import Cientifico8 from './pages/cientifico/Cientifico8';
// import Cientifico9 from './pages/cientifico/Cientifico9';


// estilo
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          {/* navegação */}
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/postagens" element={<Postagens />} />
          <Route path="/conta" element={<Conta />} />

          {/* receitas */}
          <Route path="/receitas1" element={<Receita1 />} />

          {/* cientifico */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;