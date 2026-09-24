// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// componentes
import Header from './components/Header';
import PageTransition from './components/PageLayout';

// navegação
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Receitas from './pages/Receitas';
import Catalogo from './pages/Catalogo';
import Comunidade from './pages/Comunidade';
import Conta from './pages/Conta';


// receitas
import Receita1 from './pages/receitas/Receita1';
// import Receita2 from './pages/receitas/Receita2';
// import Receita3 from './pages/receitas/Receita3';
// import Receita4 from './pages/receitas/Receita4';
// import Receita5 from './pages/receitas/Receita5';
// import Receita6 from './pages/receitas/Receita6';
// import Receita7 from './pages/receitas/Receita7';
// import Receita8 from './pages/receitas/Receita8';
// import Receita9 from './pages/receitas/Receita9';
// import Receita10 from './pages/receitas/Receita10';
// import Receita11 from './pages/receitas/Receita11';
// import Receita12 from './pages/receitas/Receita12';
// import Receita13 from './pages/receitas/Receita13';
// import Receita14 from './pages/receitas/Receita14';
// import Receita15 from './pages/receitas/Receita15';
// import Receita16 from './pages/receitas/Receita16';
// import Receita17 from './pages/receitas/Receita17';
// import Receita18 from './pages/receitas/Receita18';

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

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Navegação principal */}
        <Route path="/" element={<PageTransition><Inicio /></PageTransition>} />
        <Route path="/sobre" element={<PageTransition><Sobre /></PageTransition>} />
        <Route path="/receitas" element={<PageTransition><Receitas /></PageTransition>} />
        <Route path="/catalogo" element={<PageTransition><Catalogo /></PageTransition>} />
        <Route path="/comunidade" element={<PageTransition><Comunidade /></PageTransition>} />
        <Route path="/conta" element={<PageTransition><Conta /></PageTransition>} />

        {/* Receitas */}
        <Route path="/receitas1" element={<PageTransition><Receita1 /></PageTransition>} />

        {/* Científico (adicione conforme for descomentando) */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;