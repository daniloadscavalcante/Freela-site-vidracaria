import './Global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from '../src/layout/Footer';
import Header from '../src/layout/Header'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';




import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <Router>
     
      <Header />
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-nos' element={<Sobre />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/projetos-realizados' element={<Projetos />}/>
          <Route path='/contato' element={<Contato />}/>
        </Routes>
        <Footer />
      
    </Router>
    
  )
}

export default App;
