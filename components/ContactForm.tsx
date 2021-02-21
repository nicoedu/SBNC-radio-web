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
import theme from 'theme'

export default function ContactForm({
  isHome = false,
  radioColor
}: {
  isHome?: boolean
  radioColor?: string
}): JSX.Element {
  return (
    <Box position="relative" w="100%" h="100%" py={2} pr={2}>
      <form>
        <Box alignItems="start" ml={5}>
          <Heading fontWeight="bold" mb={1} align="left">
            Fale Conosco
          </Heading>
          <HStack mb={3}>
            <FormControl id="first-name" isRequired w="45%" mr={5}>
              <FormLabel>Nome</FormLabel>
              <Input variant="flushed" placeholder="Seu nome" />
            </FormControl>

            <FormControl id="phone" w="45%">
              <FormLabel>Telefone</FormLabel>
              <Input variant="flushed" placeholder="+55(81)9999999" />
            </FormControl>
          </HStack>

          <HStack mb={3}>
            <FormControl id="subject" isRequired w="45%" mr={5}>
              <FormLabel>Assunto</FormLabel>
              <Input variant="flushed" placeholder="O assunto" />
            </FormControl>

            <FormControl id="email" isRequired w="45%">
              <FormLabel>E-mail</FormLabel>
              <Input variant="flushed" placeholder="Seu e-mail" type="email" />
            </FormControl>
          </HStack>

          <HStack mb={5}>
            <Textarea placeholder="Sua mensagem" variant="flushed" w="95%" />
          </HStack>
        </Box>
        <Flex>
          <Button
            background="primary"
            color="white"
            mx="auto"
            alignSelf="center"
            type="submit"
            w={['60%', '40%', '30%']}
            borderRadius={isHome ? 20 : 30}
          >
            Enviar
          </Button>
        </Flex>
        {isHome ? null : radioColor ? (
          <Box position="absolute" bottom="0" right="0">
            <SvgCornerRadio height={80} color={radioColor} />
          </Box>
        ) : null}
      </form>
    </Box>
  )
}
