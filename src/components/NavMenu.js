import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import MenuGreeting from '../../Auth/UserAuthButton';


class NavMenu extends Component {
  render() {
    return (
        <div>
        <Navbar
          fixed="top"
          expand="lg"
          style={{
            maxHeight: '75px',
            backgroundColor: 'black',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
          }}
        >
            <Container fluid>
            <Navbar.Brand
              href="/"
              style={{
                color: '#a58158'
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
                    color: '#a58158'
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  style={{
                    color: '#a58158'
                  }}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  style={{
                    color: '#a58158'
                  }}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href="/projects"
                  style={{
                    color: '#a58158'
                  }}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  href="/blog"
                  style={{
                    color: '#a58158'
                  }}
                >
                  Blog
                </Nav.Link>
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