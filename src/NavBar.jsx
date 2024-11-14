import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ImagemLogo from './img/logo.png';

function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`menu ${scrolled ? 'transparent' : ''}`}>
      <img src={ImagemLogo} className="imglogo" alt="Logo" />
      <Container className="mx-auto">
        <Link to="/">HOME</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/quem-somos">QUEM SOMOS</Link>
            <Link to="/doe-aqui">DOE AQUI</Link>
            <Link to="/seja-voluntario">SEJA UM VOLUNTÁRIO</Link>
            <Link to="/cursos-ofertados">CURSOS OFERTADOS</Link>
            <Link to="/projetos">PROJETOS</Link>
            <Link to="/fabricacao-de-pranchas">FABRICAÇÃO DE PRANCHAS</Link>
            <Link target='_blank' to="https://wa.me/5551994962262?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+ONG+Projeto+Surfar.+">FALE CONOSCO</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
