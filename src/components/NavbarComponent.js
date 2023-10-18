import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="navbar-style shadow">
      <Container>
        <Navbar.Brand href="#home" className='navbar-text'><strong>Ana's</strong> Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" className='navbar-text'>Statistik</Nav.Link>
            <Nav.Link href="#link" className='navbar-text'>Product</Nav.Link>
            <Nav.Link href="#home" className='navbar-text'>History</Nav.Link>
            <Nav.Link href="#link" className='navbar-text'>Pengaturan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;