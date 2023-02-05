import SearchBar from '../SearchBar/SearchBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from '../Carrito/Carrito';
import logo from '../../img/logo-materiales-murillo.png';
import {Link} from "react-router-dom"
import { CartContext } from 'context/CartContext';
import { useContext } from 'react';

function Navegador() {

  const {totalQuantity} = useContext(CartContext)


  return (
    
    <>
     {[false].map((expand) => (
        <Navbar key={expand} expand={expand} style={{padding:'0'}}>
          <Container  style={{ backgroundColor: '#fcbf49', padding:'1rem'}} fluid>
          <Link to='/'><img src={logo} alt="logo"/></Link>
            <CartWidget totalQuantity={totalQuantity} />
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
                <Link style={{textDecoration: 'none', color: 'black'}}to='/'>Página Principal</Link> 
                  <Nav.Link href="#action2">Tu Carrito</Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/category/construccion'><NavDropdown.Item href="#action1">Construcción</NavDropdown.Item></Link>
                    <NavDropdown.Divider />
                    <Link  style={{textDecoration: 'none', color: 'black'}} to='/category/hogar'><NavDropdown.Item href="#action2">Hogar</NavDropdown.Item></Link>
                    <NavDropdown.Divider />
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/category/herramientas-y-maquinaria'><NavDropdown.Item href="#action3">Herramientas y Maquinaria</NavDropdown.Item></Link>                   
                  </NavDropdown>
                </Nav>
                <SearchBar/> 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


export default Navegador;