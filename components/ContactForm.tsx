import React, { useReducer } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea
} from '@chakra-ui/react'
import SvgCornerRadio from '@components/layout/corner-radio'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

export default function ContactForm({
  isHome = false,
  radioColor
}: {
  isHome?: boolean
  radioColor?: string
}): JSX.Element {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [resize, setResize] = React.useState('vertical')

  const handleSubmit = (event) => {
    event.preventDefault()
    submitRequest(event)
  }

  const submitRequest = async (e) => {
    const json = JSON.stringify(formData)
    const response = await fetch('http://localhost:9000', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: json
    })
    const resData = await response.json()

    if (resData.status === 'success') {
      alert('Message Sent.')
    } else if (resData.status === 'fail') {
      alert('Message failed to send.')
    }
  }

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    })
  }

  return (
    <Box
      position="relative"
      w="100%"
      py={2}
      pr={2}
      mb={['0']}
      overflow="hidden"
    >
      <form onSubmit={handleSubmit}>
        <Box alignItems="start" ml={5} mt={['', '5%', '0%']}>
          <Heading
            fontWeight="bold"
            mb={[5, '', '', 8]}
            fontSize={['3xl', '', '2xl', '4xl']}
            align="left"
            display={['', 'none', 'block']}
          >
            Fale Conosco
          </Heading>
          <HStack mb={[5, 2]}>
            <FormControl id="first-name" isRequired w="45%" mr={[5, 2]}>
              <FormLabel
                fontSize={['md', 'xs', '', 'lg']}
                fontWeight={'bold'}
                mb={0}
              >
                Nome
              </FormLabel>
              <Input
                size="sm"
                variant="flushed"
                placeholder="Seu nome"
                name="name"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="phone" w="45%" isRequired>
              <FormLabel
                fontSize={['md', 'xs', '', 'lg']}
                fontWeight={'bold'}
                mb={0}
              >
                Telefone
              </FormLabel>
              <Input
                size="sm"
                variant="flushed"
                placeholder="+55 (81) 9999999"
                name="phone"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack mb={5}>
            <FormControl id="subject" isRequired w="45%" mr={[5, 2]}>
              <FormLabel
                fontSize={['md', 'xs', '', 'lg']}
                fontWeight={'bold'}
                mb={0}
              >
                Assunto
              </FormLabel>
              <Input
                size="sm"
                variant="flushed"
                placeholder="O assunto"
                name="subject"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email" isRequired w="45%">
              <FormLabel
                fontSize={['md', 'xs', '', 'lg']}
                fontWeight={'bold'}
                mb={0}
              >
                E-mail
              </FormLabel>
              <Input
                size="sm"
                variant="flushed"
                placeholder="Seu e-mail"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack mb={[5, 2]}>
            <FormControl id="message" isRequired w="95%">
              <FormLabel
                fontSize={['md', 'xs', '', 'lg']}
                fontWeight={'bold'}
                mb={0}
              >
                Mensagem
              </FormLabel>
              <Textarea
                resize={resize}
                size="xs"
                placeholder="Sua mensagem"
                variant="flushed"
                name="mensagem"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
        </Box>
        <Flex>
          <Button
            background={radioColor}
            color="white"
            mx="auto"
            alignSelf="center"
            type="submit"
            w={['60%', '40%', '30%', '45%']}
            h={['', '30px', '30px', '40px']}
            borderRadius={isHome ? 20 : 30}
          >
            Enviar
          </Button>
        </Flex>
        {isHome ? null : radioColor ? (
          <Box position="absolute" bottom="0" right="0">
            <SvgCornerRadio height={[60]} color={radioColor} />
          </Box>
        ) : null}
      </form>
    </Box>
  )
}
