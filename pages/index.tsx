import { Box, Flex, Heading, Text, Grid, Image, Center } from '@chakra-ui/react'
import React from 'react'
import Header from '@components/navbar/Header'

export default function Home(): JSX.Element {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: '1200px' }}
        height="100vh"
        bgGradient="linear(to-b, primary, secondary)"
      >
        <Header />
        <Heading as="h2" mt={8} textAlign="center">
          Welcome to our home
        </Heading>
        <Text mt={8} textAlign="center">
          Ola Mundo
        </Text>
      </Flex>
      <Box background="primary" py="10">
        <Grid h="100%" templateColumns={['1fr', '1fr', '6fr 5fr']}>
          <Center w="100%" alignItems="center" mx="auto">
            <Image
              h={[200, 285]}
              pl={5}
              src="layout/image-bg-ping.svg"
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
      <Box height="800px"></Box>
    </>
  )
}
