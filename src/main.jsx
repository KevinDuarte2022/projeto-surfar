import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx';
import QuemSomos from './QuemSomos.jsx';
import DoeAqui from './DoeAqui.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SejaVoluntario from './SejaVoluntario.jsx';
import Cursos from './Cursos.jsx';
import Projetos from './Projetos.jsx';
import FabricacaoDePranchas from './FabricacaoDePranchas.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <Routes>
    <Route path='/' Component={Home}/>
    <Route Component={QuemSomos} path='/quem-somos' exact />
    <Route Component={DoeAqui} path='/doe-aqui' exact />
    <Route Component={SejaVoluntario} path='/seja-voluntario' exact/>
    <Route Component={Cursos} path='/cursos-ofertados' exact/>
    <Route Component={Projetos} path='/projetos' exact/>
    <Route Component={FabricacaoDePranchas} path='/fabricacao-de-pranchas' exact/>
    
    </Routes>
  </React.StrictMode>
  </Router>,
)

