import { ErrorMessage, useFormik } from 'formik'
import {
  Box,
  Flex,
  Input,
  Stack,
  Button,
  Heading,
  Textarea,
  useToast,
  InputGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setSubmitting] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validate: (values) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const errors = {}
      if (!values.name) {
        errors.name = 'Nome obrigatório'
      }
      if (!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Email inválido'
      }
      if (!values.subject) {
        errors.subject = 'Campo obrigatório'
      }
      if (!values.message) {
        errors.message = 'Inisira uma mensagem'
      }
      return errors
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log('dale')
    },
  })

  return (
    <Flex>
      <Box w={500} p={4} my={12} mx="auto">
        <Heading textAlign="center" as="h2">
          Register
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <Stack justify="center" mt={6} spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                name="name"
                placeholder="Nome"
                id="name"
                aria-describedby="name-helper-text"
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                aria-describedby="email-helper-text"
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </FormControl>
            <FormControl>
              <FormLabel>Telefone</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.phone}
                type="tel"
                name="phone"
                placeholder="Telefone"
                id="phone"
                aria-describedby="email-helper-text"
              />
              {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Assunto</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.subject}
                type="text"
                name="subject"
                placeholder="Assunto"
                id="subject"
                aria-describedby="email-helper-text"
              />
              {formik.errors.subject ? (
                <div>{formik.errors.subject}</div>
              ) : null}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mensagem</FormLabel>
              <Textarea
                name="message"
                id="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder="Insira sua mensagem"
                size="sm"
              />
              {formik.errors.message ? (
                <div>{formik.errors.message}</div>
              ) : null}
            </FormControl>
          </Stack>

          <Stack justify="center" mt={6} isInline spacing={10}>
            <Button
              minWidth="40%"
              variant="solid"
              isLoading={isSubmitting}
              type="submit"
            >
              Enviar
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  )
}
