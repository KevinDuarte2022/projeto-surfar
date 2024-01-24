import React from 'react'
import ReactDOM from 'react-dom/client'
import Set from './Set.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx';
import { Route } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)

export default function Main(){
  return(
    <Routes/>
  );
}
