/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Image } from '@chakra-ui/react'
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
        backgroundColor: '#2E3092'
      }}
    >
      <Navbar.Brand href="/">
        <Image
          src="/sbnc.svg"
          h={['55px']}
          left={['5.5vw']}
          top={0}
          zIndex={1}
          position="absolute"
        />
        <Image
          src="/white-background.png"
          position="absolute"
          h={'65px'}
          top={0}
          left={['4vw']}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <HamburgerIcon color="white" boxSize={6} />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" style={{ color: 'white' }}>
          <NavDropdown
            alignRight={true}
            title="Rádios"
            id="collasible-nav-dropdown"
            style={{ color: 'white' }}
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
                onClick={scrollToAbout}
                style={{
                  '&::hover': {
                    color: 'black',
                    backgroundColor: 'pink'
                  }
                }}
              >
                Quem somos
              </Nav.Link>
              <Nav.Link href={''} eventKey={2} onClick={scrollToContact}>
                Anuncie conosco
              </Nav.Link>
            </>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
