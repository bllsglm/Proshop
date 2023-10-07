import {Navbar,Nav,Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa';

const header = () => {
  return (
    <header>
       <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/"> Proshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" >
           <Nav className="me-auto" >
            <Nav.Link href="/cart" > <FaShoppingCart/> Cart </Nav.Link>
            <Nav.Link href="/login"> <FaUser/> Sign in </Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
    </header>
  )
}

export default header