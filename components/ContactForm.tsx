import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  useToast
} from '@chakra-ui/react'
import SvgCornerRadio from '@components/layout/corner-radio'
import fetch from 'node-fetch'
import React, { useReducer } from 'react'

type State = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const formReducer = (state: State, event: { name: string; value: string }) => {
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
  const toast = useToast()
  const [formData, setFormData] = useReducer(formReducer, {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await fetch('/api/send-self-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(() => {
        toast({
          title: 'Sucesso',
          description: 'Mensagem enviada com sucesso',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
      })
      .catch((error) => {
        console.log(error)
        toast({
          title: 'Erro',
          description: 'Falha ao enviar email, tente novamente mais tarde',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    })
  }

  return (
    <Box position="relative" w="100%" h="100%" py={2} pr={2} mb={['0']}>
      <form onSubmit={handleSubmit}>
        <Flex
          alignItems="start"
          flexDirection="row"
          flexWrap={'wrap'}
          ml={5}
          mt={['', '5%', '0%', '1%']}
        >
          <Heading
            fontWeight="bold"
            mt={isHome ? [4] : ['']}
            mb={isHome ? [5] : [5, '', '', 3]}
            fontSize={
              isHome
                ? ['3xl', '3xl', '2xl', '3xl']
                : ['3xl', '3xl', 'xl', '2xl']
            }
            align="left"
            display={['', 'block']}
          >
            Fale Conosco
          </Heading>
          <HStack mb={isHome ? [6] : [5, 2]} w={'95%'}>
            <FormControl id="first-name" isRequired w="45%" mr={[5, 2]}>
              <FormLabel
                fontSize={
                  isHome ? ['md', 'xs', '', 'md'] : ['md', 'xs', '', 'sm']
                }
                fontWeight={'bold'}
                mb={isHome ? 3 : 0}
              >
                Nome
              </FormLabel>
              <Input
                h={isHome ? [''] : ['3%']}
                fontSize={isHome ? ['md'] : ['sm']}
                variant="flushed"
                placeholder="Seu nome"
                name="name"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="phone" w="45%" isRequired>
              <FormLabel
                fontSize={
                  isHome ? ['md', 'xs', '', 'md'] : ['md', 'xs', '', 'sm']
                }
                fontWeight={'bold'}
                mb={isHome ? 3 : 0}
              >
                Telefone
              </FormLabel>
              <Input
                h={isHome ? [''] : ['3%']}
                fontSize={isHome ? ['md'] : ['sm']}
                variant="flushed"
                placeholder="+55 (81) 9999999"
                name="phone"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack mb={isHome ? [6] : [5, 2]} w={'95%'}>
            <FormControl id="subject" isRequired w="45%" mr={[5, 2]}>
              <FormLabel
                fontSize={
                  isHome ? ['md', 'xs', '', 'md'] : ['md', 'xs', '', 'sm']
                }
                fontWeight={'bold'}
                mb={isHome ? 3 : 0}
              >
                Assunto
              </FormLabel>
              <Input
                h={isHome ? [''] : ['3%']}
                fontSize={isHome ? ['md'] : ['sm']}
                variant="flushed"
                placeholder="O assunto"
                name="subject"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email" isRequired w="45%">
              <FormLabel
                fontSize={
                  isHome ? ['md', 'xs', '', 'md'] : ['md', 'xs', '', 'sm']
                }
                fontWeight={'bold'}
                mb={isHome ? 3 : 0}
              >
                E-mail
              </FormLabel>
              <Input
                h={isHome ? [''] : ['3%']}
                fontSize={isHome ? ['md'] : ['sm']}
                variant="flushed"
                placeholder="Seu e-mail"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack mb={isHome ? [3] : [5, 2]} w={'95%'}>
            <FormControl id="message" isRequired w="95%">
              <FormLabel
                fontSize={
                  isHome ? ['md', 'xs', '', 'md'] : ['md', 'xs', '', 'sm']
                }
                fontWeight={'bold'}
                mb={isHome ? 3 : 0}
              >
                Mensagem
              </FormLabel>
              <Textarea
                size={isHome ? 'md' : 'sm'}
                placeholder="Sua mensagem"
                variant="flushed"
                name="message"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          <Button
            background={isHome ? 'blue' : radioColor}
            color="white"
            mx="auto"
            mt={isHome ? '3%' : 'undefined'}
            alignSelf="center"
            type="submit"
            w={['60%', '40%', '30%', '45%']}
            h={['40px', '30px', '30px', '40px']}
            borderRadius={isHome ? 20 : 30}
            mb={isHome ? [5] : ''}
            _hover={isHome ? { bg: 'primary' } : { bg: radioColor }}
          >
            Enviar
          </Button>
          {isHome ? null : radioColor ? (
            <Box position="absolute" bottom="0" right="0">
              <SvgCornerRadio height={[60]} color={radioColor} />
            </Box>
          ) : null}
        </Flex>
      </form>
    </Box>
  )
}
