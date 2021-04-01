/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HamburgerIcon } from '@chakra-ui/icons'

const Header = ({
  scrollToAbout = () => {},
  scrollToContact = () => {},
  isHome
}) => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="xl"
      sticky="top"
      variant="white"
      style={{
        minHeight: '70px',
        width: '100%',
        backgroundColor: 'white'
      }}
    >
      <Navbar.Brand href="/" style={{ position: 'absolute', width: '90%' }}>
        <Image src="/sbnc.svg" h={['55px']} alignSelf="center" mx="auto" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ position: 'absolute', right: '5%' }}
      >
        <HamburgerIcon color="black" boxSize={6} />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" style={{ color: 'white' }}>
          <NavDropdown
            alignRight={true}
            title="Rádios"
            id="collasible-nav-dropdown"
            style={{ color: 'black' }}
          >
            <NavDropdown.Item href="/radios/jprecife">
              Jovem Pan Recife
            </NavDropdown.Item>
            <NavDropdown.Item href="/radios/jpcaruaru">
              Jovem Pan Caruaru
            </NavDropdown.Item>
            <NavDropdown.Item href="/radios/band">Band FM</NavDropdown.Item>
            <NavDropdown.Item href="/radios/music">Music FM</NavDropdown.Item>
          </NavDropdown>
          {isHome ? (
            <>
              <Nav.Link
                href={''}
                style={{ color: '#000' }}
                onClick={scrollToAbout}
              >
                Quem somos
              </Nav.Link>
              <Nav.Link
                href={''}
                className="contact"
                style={{ color: '#FFDE3A' }}
                eventKey={2}
                onClick={scrollToContact}
              >
                <b>Fale conosco</b>
              </Nav.Link>
            </>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
