// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// componentes
import Header from './components/Header';

// navegação
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Receitas from './pages/Receitas';
import Catalogo from './pages/Catalogo';
import Comunidade from './pages/Comunidade';
import Conta from './pages/Conta';
import Registro from './pages/Registro';
import EditarPerfil from './pages/EditarPerfil';
import CriarPostagens from './pages/CriarPostagens';


// receitas
import Receita1 from './pages/receitas/Receita1';
import Receita2 from './pages/receitas/Receita2';
import Receita3 from './pages/receitas/Receita3';
import Receita4 from './pages/receitas/Receita4';
import Receita5 from './pages/receitas/Receita5';
import Receita6 from './pages/receitas/Receita6';
import Receita7 from './pages/receitas/Receita7';
import Receita8 from './pages/receitas/Receita8';
import Receita9 from './pages/receitas/Receita9';
import Receita10 from './pages/receitas/Receita10';
import Receita11 from './pages/receitas/Receita11';
import Receita12 from './pages/receitas/Receita12';
import Receita13 from './pages/receitas/Receita13';
import Receita14 from './pages/receitas/Receita14';
import Receita15 from './pages/receitas/Receita15';
import Receita16 from './pages/receitas/Receita16';
import Receita17 from './pages/receitas/Receita17';
import Receita18 from './pages/receitas/Receita18';

// cientificos
import Cientifico1 from './pages/cientifico/Cientifico1';
import Cientifico2 from './pages/cientifico/Cientifico2';
import Cientifico3 from './pages/cientifico/Cientifico3';
import Cientifico4 from './pages/cientifico/Cientifico4';
import Cientifico5 from './pages/cientifico/Cientifico5';
import Cientifico6 from './pages/cientifico/Cientifico6';
import Cientifico7 from './pages/cientifico/Cientifico7';
import Cientifico8 from './pages/cientifico/Cientifico8';
import Cientifico9 from './pages/cientifico/Cientifico9';


// estilo
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Navegação principal */}
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/registro" element={<Registro />} />

          {/* Navegação secundária */}
          <Route path="/editarperfil" element={<EditarPerfil />} />
          <Route path="/criarpostagens" element={<CriarPostagens />} />

          {/* Receitas */}
          <Route path="/receitas1" element={<Receita1 />} />
          <Route path="/receitas2" element={<Receita2 />} />
          <Route path="/receitas3" element={<Receita3 />} />
          <Route path="/receitas4" element={<Receita4 />} />
          <Route path="/receitas5" element={<Receita5 />} />
          <Route path="/receitas6" element={<Receita6 />} />
          <Route path="/receitas7" element={<Receita7 />} />
          <Route path="/receitas8" element={<Receita8 />} />
          <Route path="/receitas9" element={<Receita9 />} />
          <Route path="/receitas10" element={<Receita10 />} />
          <Route path="/receitas11" element={<Receita11 />} />
          <Route path="/receitas12" element={<Receita12 />} />
          <Route path="/receitas13" element={<Receita13 />} />
          <Route path="/receitas14" element={<Receita14 />} />
          <Route path="/receitas15" element={<Receita15 />} />
          <Route path="/receitas16" element={<Receita16 />} />
          <Route path="/receitas17" element={<Receita17 />} />
          <Route path="/receitas18" element={<Receita18 />} />

          {/* Científico */}
          <Route path="/cientifico1" element={<Cientifico1 />} />
          <Route path="/cientifico2" element={<Cientifico2 />} />
          <Route path="/cientifico3" element={<Cientifico3 />} />
          <Route path="/cientifico4" element={<Cientifico4 />} />
          <Route path="/cientifico5" element={<Cientifico5 />} />
          <Route path="/cientifico6" element={<Cientifico6 />} />
          <Route path="/cientifico7" element={<Cientifico7 />} />
          <Route path="/cientifico8" element={<Cientifico8 />} />
          <Route path="/cientifico9" element={<Cientifico9 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;