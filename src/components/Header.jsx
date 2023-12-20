import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div >
      <Navbar expand="lg"  bg="light" data-bs-theme="light" className=" position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container fluid>
        <Navbar.Brand href="https://www.playstation.com/en-us/">
            <i class="fa-brands fa-playstation" style={{color:"blue",fontSize:"40px"}}></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"black"}}>Games<i class="fa-solid fa-angle-down " style={{color:"#0a0a0a"}}></i></Nav.Link>
            <Nav.Link href="#action2" style={{color:"black"}}>PS5<i class="fa-solid fa-angle-down" style={{color:"#0a0a0a"}}></i></Nav.Link>
            <Nav.Link href="#action3" style={{color:"#0a0a0a"}}>PS4<i class="fa-solid fa-angle-down" style={{color:"#0a0a0a"}}></i></Nav.Link>
            <Nav.Link href="#action4" style={{color:"#0a0a0a"}}>Services <i class="fa-solid fa-angle-down" style={{color:"#0a0a0a"}}></i></Nav.Link>
            <Nav.Link href="#action5" style={{color:"#0a0a0a"}}>Accessories<i class="fa-solid fa-angle-down" style={{color:"#0a0a0a"}}></i></Nav.Link>
            <Nav.Link href="#action6" style={{color:"#0a0a0a"}}>News<i class="fa-solid fa-angle-down" style={{color:"#0a0a0a"}}></i></Nav.Link>
            <Nav.Link href="#action7" style={{color:"#0a0a0a"}}>Store<i class="fa-solid fa-angle-down" style={{color:"#0a0a0a"}}></i></Nav.Link>
            <Nav.Link href="#action8" style={{color:"#0a0a0a"}}>Support<i class="fa-solid fa-angle-down" style={{color:"#0a0a0a"}}></i></Nav.Link>
          </Nav>
          
          
          <Form className="d-flex " >
          <Button variant="primary" size="sm" className='btn rounded-pill me-3' style={{width:"7rem",height:"2rem"}}>
          Sign in
        </Button>{' '}
       <Nav>
       <Nav.Link href="#action8"><i class="fa-solid fa-magnifying-glass" style={{color:"#0d0d0d",fontSize:"20px"}}></i></Nav.Link>
       </Nav>
       
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header