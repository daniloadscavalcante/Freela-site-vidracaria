import './Global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from '../src/layout/Footer';
import Header from '../src/layout/Header'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';


function App() {
  return (
    <Router>
      <Header />
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
