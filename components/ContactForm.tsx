import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function ContactForm() {
  return (
    <Box pos="relative" w="100%" h="100%">
      <form>
        <Box alignItems="start" ml={10}>
          <Heading fontWeight="bold" mb={5} mt={3} align="left">
            Fale Conosco
          </Heading>
          <HStack mb={3}>
            <FormControl id="first-name" isRequired w="45%" mr={5}>
              <FormLabel>Primeiro nome</FormLabel>
              <Input variant="flushed" placeholder="Primeiro Nome" />
            </FormControl>

            <FormControl id="phone" isRequired w="45%">
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

          <Button colorScheme="blue" type="submit" w="20%" borderRadius={30}>
            Enviar
          </Button>
        </Box>
      </form>
      <Image
        src="/Ball.png"
        pos="absolute"
        bottom={10}
        right={8}
        h="20%"
        zIndex={2}
      />
      <Image
        src="/Detail.png"
        pos="absolute"
        height={100}
        bottom={3}
        right={0}
      />
    </Box>
  );
}
