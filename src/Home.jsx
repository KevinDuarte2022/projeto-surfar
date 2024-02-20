import React from "react"
import { Link } from "react-router-dom"
import NavBarComponent from "./NavBar"
import './index.css';
import Carrossel from "./Carrossel"
import { Container } from "bootstrap-4-react/lib/components/layout";
import { useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from "./Footer"

function Home() {
    let navigate = useNavigate();
  const doar10 = (string) => {
    navigate('/doe-aqui', {valor: string});
  };
    return (
        <div>
            <NavBarComponent />
            <Carrossel />
            <ListGroup horizontal className='doarHome'>
                <ListGroup.Item onClick={() => doar10("Dado a ser enviado")}>R$ 10</ListGroup.Item>
                <ListGroup.Item>R$30</ListGroup.Item>
                <ListGroup.Item>R$50</ListGroup.Item>
                <ListGroup.Item>Outro valor</ListGroup.Item>
            </ListGroup>
            <Footer />
        </div>
    )
};



export default Home;