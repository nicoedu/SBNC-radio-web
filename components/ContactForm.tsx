import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export default function ContactForm() {
  return (
    <form>
      <VStack alignItems="start" ml={10}>
        <Text fontSize="3xl" fontWeight="bold">
          {' '}
          Fale Conosco
        </Text>
        <HStack>
          <FormControl id="first-name" isRequired>
            <FormLabel>Primeiro nome</FormLabel>
            <Input placeholder="Primeiro Nome" />
          </FormControl>

          <FormControl id="phone" isRequired>
            <FormLabel>Telefone</FormLabel>
            <Input placeholder="+55(81)9999999" />
          </FormControl>
        </HStack>

        <HStack>
          <FormControl id="subject" isRequired>
            <FormLabel>Assunto</FormLabel>
            <Input placeholder="O assunto" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input placeholder="Seu e-mail" type="email" />
          </FormControl>
        </HStack>

        <Textarea placeholder="Sua mensagem" />

        <Button colorScheme="blue" type="submit">
          {' '}
          Enviar{' '}
        </Button>
      </VStack>
    </form>
  )
}
