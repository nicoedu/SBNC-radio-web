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

export default function ContactForm({
  isHome = false,
  radioColor
}: {
  isHome?: boolean
  radioColor?: string
}): JSX.Element {
  return (
    <Box
      position="relative"
      w="100%"
      py={2}
      pr={2}
      mb={['0']}
      overflow="hidden"
    >
      <form>
        <Box alignItems="start" ml={5} mt={['', '5%', '0%']}>
          <Heading
            fontWeight="bold"
            mb={3}
            fontSize={['3xl', '', '2xl']}
            align="left"
            display={['', 'none', 'block']}
          >
            Fale Conosco
          </Heading>
          <HStack mb={[5, 2]}>
            <FormControl id="first-name" isRequired w="45%" mr={[5, 2]}>
              <FormLabel fontSize={['sm', 'xs']}>Nome</FormLabel>
              <Input size="sm" variant="flushed" placeholder="Seu nome" />
            </FormControl>

            <FormControl id="phone" w="45%" isRequired>
              <FormLabel fontSize={['sm', 'xs']}>Telefone</FormLabel>
              <Input size="sm" variant="flushed" placeholder="+55(81)9999999" />
            </FormControl>
          </HStack>

          <HStack mb={5}>
            <FormControl id="subject" isRequired w="45%" mr={[5, 2]}>
              <FormLabel fontSize={['sm', 'xs']}>Assunto</FormLabel>
              <Input size="sm" variant="flushed" placeholder="O assunto" />
            </FormControl>

            <FormControl id="email" isRequired w="45%">
              <FormLabel fontSize={['sm', 'xs']}>E-mail</FormLabel>
              <Input
                size="sm"
                variant="flushed"
                placeholder="Seu e-mail"
                type="email"
              />
            </FormControl>
          </HStack>

          <HStack mb={[5, 2]}>
            <FormControl id="message" isRequired w="95%">
              <FormLabel fontSize={['sm', 'xs']}>Mensagem</FormLabel>
              <Textarea
                size="xs"
                placeholder="Sua mensagem"
                variant="flushed"
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
            w={['60%', '40%', '30%']}
            h={['', '30px']}
            borderRadius={isHome ? 20 : 30}
          >
            Enviar
          </Button>
        </Flex>
        {isHome ? null : radioColor ? (
          <Box position="absolute" bottom="0" right="0">
            <SvgCornerRadio height={[60, 0]} color={radioColor} />
          </Box>
        ) : null}
      </form>
    </Box>
  )
}
