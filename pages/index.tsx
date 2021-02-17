import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Image,
  Center,
  Stack,
  Button,
  StackItem,
} from '@chakra-ui/react'
import React from 'react'
import Header from '@components/navbar/Header'
import ContactForm from '@components/ContactForm'
import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons'

export default function Home(): JSX.Element {
  return (
    <>
      <Flex
        position="relative"
        direction="column"
        height={['160vh', '150vh', '100vh']}
        align="center"
        bgGradient="linear(to-b, primary, secondary)"
      >
        <Header />

        <Center height="50%">
          <Box>
            <Heading size={'2xl'} color="white" mt={8} textAlign="center">
              <b>Sistema Brasil Nordestes de Comunicação</b>
            </Heading>
            <Text fontSize={'3xl'} color="white" mt={8} textAlign="center">
              Grupo das maiores rádios do Nordeste
            </Text>
            <Center py={5}>
              <Button w={300} background="contrast" borderRadius={20}>
                Entre em contato
              </Button>
            </Center>
          </Box>
        </Center>
        <Box position="absolute" bottom={'5vh'} px="5">
          <Grid
            gap={'6vw'}
            templateColumns={[
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(4, 1fr)',
            ]}
          >
            <RadioCard title="Jovem Pan Caruaru" id="jpcaruaru"></RadioCard>
            <RadioCard title="Music FM Recife" id="music"></RadioCard>
            <RadioCard title="Jovem Pan Recife" id="jprecife"></RadioCard>
            <RadioCard title="Band FM Caruaru" id="band"></RadioCard>
          </Grid>
        </Box>
      </Flex>
      <Box background="primary" py="10" px="10">
        <Grid h="100%" templateColumns={['1fr', '1fr', '6fr 5fr']}>
          <Center w="100%" alignItems="center" mx="auto">
            <Image
              h={[200, 285]}
              pl={5}
              src="layout/image-bg-pink.svg"
              position="absolute"
            ></Image>
            <Image h={[160, 250]} zIndex="100" src="about.png" />%
          </Center>
          <Box w="100%" px="5" pt={['10', '10', '0']} my="auto" color="white">
            <Heading size="lg" py="3">
              Quem somos
            </Heading>
            <Text align="justify">
              O SBNC - Sistema Brasil Nordeste de Comunicação foi fundado em
              julho de 1983, fruto do espírito empreendedor do casal de
              empresários Isabel Christina e Ricardo de Araújo Pinto,
              entusiastas da radiodifusão.
              <br />
              Em quase 40 anos de atuação, o Grupo SBNC continua expandindo,
              investindo em tecnologia, recursos, profissionais, e, levando o
              melhor de sua programação com qualidade e força para cerca de 80%
              do estado de Pernambuco, 118 municípios e toda a Grande Recife, o
              que corresponde a mais de 7 milhões de pernambucanos.
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box background="background" py="10" px="10">
        <Grid h="100%" templateColumns={['1fr', '1fr', '5fr 6fr']}>
          <Box w="100%" px="5" my="auto" color="white">
            <Heading color="black" size="lg" py="3">
              Anuncie conosco
            </Heading>
            <Text color="black" align="justify">
              O SBNC - Sistema Brasil Nordeste de Comunicação foi fundado em
              julho de 1983, fruto do espírito empreendedor do casal de
              empresários Isabel Christina e Ricardo de Araújo Pinto,
              entusiastas da radiodifusão.
              <br />
              Em quase 40 anos de atuação, o Grupo SBNC continua expandindo,
              investindo em tecnologia, recursos, profissionais, e, levando o
              melhor de sua programação com qualidade e força para cerca de 80%
              do estado de Pernambuco, 118 municípios e toda a Grande Recife, o
              que corresponde a mais de 7 milhões de pernambucanos.
            </Text>
          </Box>
          <Center w="100%" pt={['20', '20', '0']} alignItems="center" mx="auto">
            <Image
              overflow="hidden"
              h={[300, 400]}
              src="layout/image-bg-blue.svg"
              position="absolute"
            ></Image>
            <Image h={[160, 250]} zIndex="100" src="about.png" />%
          </Center>
        </Grid>
      </Box>
      <Box background="darkBackground" py={20}>
        <Flex w="80%" mx="auto" background="background" borderRadius={40}>
          <ContactForm />
          <Box
            borderRadius={40}
            p={5}
            ml="auto"
            background="secondary"
            position="relative"
          >
            <Heading size="lg">Informações de Contato</Heading>
            <Text>
              Preencha o formulário e entraremos em contato com você em até 24
              horas.
            </Text>
            <Box>
              <Stack>
                <Flex alignItems="center" justifySelf="center">
                  <PhoneIcon color="primary" />
                  <Text px={2}>+55 81 9972-5780</Text>
                </Flex>
                <Flex alignItems="center" justifySelf="center">
                  <EmailIcon color="primary" />
                  <Text px={2}>+55 81 9972-5780</Text>
                </Flex>
                <Flex alignItems="center" justifySelf="center">
                  <InfoIcon color="primary" />
                  <Text px={2}>+55 81 9972-5780</Text>
                </Flex>
              </Stack>
            </Box>
            <Image
              position="absolute"
              height={150}
              bottom={0}
              right={0}
              src="layout/corner-blue.svg"
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

const RadioCard = ({
  title,
  id,
}: {
  title: string
  id: string
}): JSX.Element => {
  return (
    <Box
      background="white"
      p={2}
      px={3}
      maxH={300}
      maxW={220}
      alignItems="center"
      justifyContent="center"
      borderRadius={20}
    >
      <Heading isTruncated size={'md'} textAlign="center">
        {title}
      </Heading>
      <Image py={3} mx="auto" maxH={125} src={'logos/' + id + '.png'} />
      <Center>
        <Button
          w="80%"
          background="primary"
          color="white"
          borderRadius={20}
          alignSelf="center"
          mx="auto"
        >
          Saiba Mais
        </Button>
      </Center>
    </Box>
  )
}
