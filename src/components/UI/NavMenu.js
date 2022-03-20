import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import MenuGreeting from '../Auth/UserAuthButton';


class NavMenu extends Component {
  render() {
    return (
        <div>
        <Navbar
          expand="lg"
          style={{
            maxHeight: '75px',
            backgroundColor: '#4d4d4d',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
          }}
        >
            <Container fluid>
            <Navbar.Brand
              href="/"
              style={{
                color: 'white'
              }}>
              GWS
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                <Nav.Link
                  href="/"
                  style={{
                    color: 'white'
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  style={{
                    color: 'white'
                  }}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  style={{
                    color: 'white'
                  }}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  style={{
                    color: 'white'
                  }}
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  href="/blog"
                  style={{
                    color: 'white'
                  }}
                >
                  Blog
                </Nav.Link>
                  {/* <MenuGreeting />
                  <NavDropdown title="Dropdown Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Nav>
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <MenuGreeting />
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
  }
}

export default NavMenu;