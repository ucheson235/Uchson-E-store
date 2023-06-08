import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'


function NavBar() {
  return (
    <Navbar fixed="top" bg="white shadow w-100 py-3 px-1" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>EStore </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/categories'>Categories</Nav.Link>
            <Nav.Link as={NavLink} to='/products'>Products</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className='d-flex align-items-conter gap-3'>
            <i class="bi bi-search"></i>
            <i class="bi bi-cart-fill"></i>
            <i class="bi bi-person-circle"></i>
         
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;