import React from 'react'
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
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <Menu>
          <MenuButton _focus={{ boxShadow: 'outline' }}>
            Radio <ChevronDownIcon />
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
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      boxShadow="base"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={4}
      bg={['primary']}
      color={['white']}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBar
