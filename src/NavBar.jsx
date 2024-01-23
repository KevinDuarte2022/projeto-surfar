import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBarComponent() {
  return (
    <Navbar expand="lg" className="menu">
      <Container className="mx-auto">
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">QUEM SOMOS</Nav.Link>
            <Nav.Link href="#link">DOE AQUI</Nav.Link>
            <Nav.Link href="#link">SEJA UM VOLUNTÁRIO</Nav.Link>
            <Nav.Link href="#link">CURSOS OFERTADOS</Nav.Link>
            <Nav.Link href="#link">PROJETOS</Nav.Link>
            <Nav.Link href="#link">CONSULTORIA PARA ONGS</Nav.Link>
            <Nav.Link href="#link">FALE CONOSCO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
