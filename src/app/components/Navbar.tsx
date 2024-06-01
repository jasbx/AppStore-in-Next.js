"use client"
import { Button, Form, Container, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import OCffnav from './OffCnav'
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container fluid>
        <Navbar.Brand href="#"><OCffnav /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link href="/" className="text-decoration-none text-black font-bold">Home</Link></Nav.Link>
            <Nav.Link ><Link href="/about" className="text-decoration-none text-black font-bold">About Us</Link></Nav.Link>

            <Nav.Link ><Link href="/service" className="text-decoration-none text-black font-bold">Service</Link></Nav.Link>
            <Nav.Link >
              <Link href="/callus" className="text-decoration-none text-black font-bold">Call us</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">

            <Link href="/signup" className='btn btn-outline-success'  >
              <span className='text-center align-items-center'><FaUserCircle className="ml-5 fs-3" /></span>
              Sign Up</Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;