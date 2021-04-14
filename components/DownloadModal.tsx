import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import fetch from 'node-fetch'
import React, { useEffect, useReducer } from 'react'

type State = {
  name: string
  email: string
  phone: string
  radioId: string
}

const formReducer = (state: State, event: { name: string; value: string }) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

export default function DownloadModal({
  isBook,
  color,
  radioId
}: {
  isBook?: boolean
  color?: string
  radioId?: string
}): JSX.Element {
  const toast = useToast()
  const [formData, setFormData] = useReducer(formReducer, {
    name: '',
    email: '',
    phone: '',
    radioId: ''
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonsName = isBook ? 'Book' : 'Tabela'

  useEffect(() => {
    if (radioId) {
      setFormData({ name: 'radioId', value: radioId })
    }
  }, [radioId])

  async function handleSubmit() {
    await fetch('/api/send-file-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(() => {
        toast({
          title: 'Sucesso',
          description: 'Email enviado com sucesso',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        onClose()
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
        onClose()
      })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    })
  }

  return (
    <>
      <Button
        onClick={onOpen}
        bg={color}
        color={'white'}
        h={['40px', '25px', '40px', '45px']}
        w={['50%', '80%', '80%', '60%']}
        mb={[5, 1, 2, 5]}
        _hover={{ bg: color }}
        borderRadius={'20px'}
      >
        {'Acessar ' + buttonsName}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={30}>
          <ModalHeader
            bg={color}
            color="white"
            borderTopRadius={30}
            pt={7}
            pb={7}
          >
            <Heading align="center">
              Baixe {buttonsName.toLowerCase()} agora mesmo
            </Heading>
          </ModalHeader>
          <ModalBody>
            <FormControl id="first-name" isRequired mt={5}>
              <FormLabel>Nome</FormLabel>
              <Input
                variant="outline"
                placeholder="Seu nome"
                borderRadius={30}
                name="name"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="phone" isRequired mt={5}>
              <FormLabel>Telefone</FormLabel>
              <Input
                variant="outline"
                borderRadius={30}
                onChange={handleChange}
                name="phone"
                placeholder="(81)99999-9999"
              />
            </FormControl>

            <FormControl id="email" isRequired mt={5}>
              <FormLabel>E-mail</FormLabel>
              <Input
                variant="outline"
                borderRadius={30}
                onChange={handleChange}
                name="email"
                placeholder="Seu e-mail"
                type="email"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter mt={5}>
            <Button
              bg={color}
              color="white"
              onClick={handleSubmit}
              d="block"
              size={'lg'}
              fontSize={['sm']}
              _hover={{ bg: color }}
            >
              {'Receber ' + buttonsName}
            </Button>
            <Button
              variant="ghost"
              onClick={onClose}
              d="block"
              fontSize={['sm']}
            >
              Não agora, obrigado!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
