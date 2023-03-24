import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CarWidget from '../CarWidget/CarWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar3() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src='../imagenes/pngwing.com.png' className="header_logo" alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link  to='/' className='link-nav'>Inicio</Link>
            <Link to='nosotros' className='link-nav'>Nosotros</Link>
            
            <NavDropdown title="Categorias" id="navbarScrollingDropdown" className='m-2'>
              < Link  to='/producto/watch'  className='link-nav'  >Watch </Link>
              <NavDropdown.Divider />
                < Link  to='/producto/iphone'  className='link-nav'  > Iphone </Link>
                <NavDropdown.Divider />
              < Link  to='/producto/mac'  className='link-nav'  >Mac </Link>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            
            <Button variant="light" > <CarWidget/> </Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar3;