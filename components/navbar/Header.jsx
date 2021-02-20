import React, { useEffect, useState } from 'react'
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  MenuButton,
  MenuList,
  Menu,
  Heading,
  Center,
} from '@chakra-ui/react'

import Logo from './Logo'
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={['black', 'black', 'primary.500', 'primary.500']}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Center display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Center>
  )
}

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Heading size={'sm'} display="block" {...rest}>
        {children}
      </Heading>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Center
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        background={isOpen ? 'primary' : null}
        my="auto"
        spacing={8}
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <Menu>
          <MenuButton _focus={{ boxShadow: 'outline' }}>
            <Heading size={'sm'} display="block">
              Radio <ChevronDownIcon boxSize={6} />
            </Heading>
          </MenuButton>
          <MenuList color="black">
            <MenuItem _hover={{ bg: 'gray.400' }} to="/">
              Jovem Pan Recife
            </MenuItem>
            <MenuItem _hover={{ bg: 'gray.400' }} to="/">
              Jovem Pan Caruaru
            </MenuItem>
            <MenuItem _hover={{ bg: 'gray.400' }} to="/">
              Music FM
            </MenuItem>
            <MenuItem _hover={{ bg: 'gray.400' }} to="/">
              Band FM
            </MenuItem>
          </MenuList>
        </Menu>
        <MenuItem to="/faetures">Quem somos </MenuItem>
        <MenuItem to="/pricing">Fale conosco </MenuItem>
      </Stack>
    </Center>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    console.log('hey')
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  if (scrolled) {
  }
  return (
    <Flex
      zIndex="1000"
      as="nav"
      h="10vh"
      align="center"
      boxShadow="base"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={4}
      position={scrolled ? 'fixed' : 'static'}
      bg={scrolled ? 'primary' : 'transparent'}
      color={['white']}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBar
