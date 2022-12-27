import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from '../Carrito/Carrito';
import logo from '../../img/logo-materiales-murillo.png';

function Navegador() {

  return (
    
    <>
     {[false].map((expand) => (
        <Navbar key={expand} expand={expand} style={{padding:'0'}}>
          <Container  style={{ backgroundColor: '#fcbf49', padding:'1rem'}} fluid>
            <img src={logo} alt="logo"/>
            <CartWidget/>
            <Navbar.Toggle style={{ backgroundColor: '#eae2b7', padding:'1rem'}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
                
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Opciones
                </Offcanvas.Title>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Página Principal</Nav.Link>
                  <Nav.Link href="#action2">Tu Carrito</Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Construcción</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Hogar</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Herramientas y Maquinaria</NavDropdown.Item>                   
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Búsqueda"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Confirmar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navegador;