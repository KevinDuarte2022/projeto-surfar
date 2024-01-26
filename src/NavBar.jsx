import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBarComponent() {
  return (
    <Navbar expand="lg" className="menu">
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
          <Link to="/consultoria">CONSULTORIA PARA ONGS</Link>
          <Link to="/fale-conosco">FALE CONOSCO</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
