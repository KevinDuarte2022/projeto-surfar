import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx';
import QuemSomos from './QuemSomos.jsx';
import DoeAqui from './DoeAqui.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <Routes>
    <Route path='/' Component={Home}/>
    <Route Component={QuemSomos} path="/quem-somos" exact />
    <Route Component={DoeAqui} path="/doe-aqui" exact />
    </Routes>
  </React.StrictMode>
  </Router>,
)

// export default function Main(){
//   return(
//     <Routes/>
//   );
// }
