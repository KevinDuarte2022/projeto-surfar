import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ImagemLogo from './img/logo.png';

function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // Estado para controlar o menu expandido

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

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className={`menu ${scrolled ? 'transparent' : ''}`} expanded={expanded}>
      <div className="logo-container">
        <img src={ImagemLogo} className="imglogo" alt="Logo" />
        <span className="project-name">Projeto Surfar</span>
      </div>
      <Container className="mx-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" onClick={() => setExpanded(false)}>HOME</Link>
            <Link to="/quem-somos" onClick={() => setExpanded(false)}>QUEM SOMOS</Link>
            <Link to="/doe-aqui" onClick={() => setExpanded(false)}>DOE AQUI</Link>
            <Link to="/seja-voluntario" onClick={() => setExpanded(false)}>SEJA UM VOLUNTÁRIO</Link>
            <Link to="/cursos-ofertados" onClick={() => setExpanded(false)}>CURSOS OFERTADOS</Link>
            <Link to="/projetos" onClick={() => setExpanded(false)}>PROJETOS</Link>
            <Link to="/fabricacao-de-pranchas" onClick={() => setExpanded(false)}>PRANCHAS</Link>
            <Link target='_blank' to="https://wa.me/5551994962262?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+ONG+Projeto+Surfar.+" onClick={() => setExpanded(false)}>FALE CONOSCO</Link>
          </Nav>
          {/* Botão "X" para fechar o menu */}
          <button className="close-button" onClick={() => setExpanded(false)}>X</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
