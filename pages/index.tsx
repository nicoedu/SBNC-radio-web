import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import ContactForm from '@components/ContactForm'
import SvgCornerHome from '@components/layout/corner-home'
import Header from '@components/navbar/Header'
import theme from 'theme'

export default function Home(): JSX.Element {
  return (
    <>
      <HeroLayout />
      <AboutUsLayout />
      <ContactUsLayout />
      <ContactInfoLayout />
    </>
  )
}

const HeroLayout = () => (
  <Flex
    position="relative"
    direction="column"
    height={['160vh', '150vh', '100vh']}
    align="center"
    bgGradient="linear(to-b, primary, secondary)"
  >
    <Header />
    <Image
      position="absolute"
      width={['60vw', '50vw']}
      top={['20vh', '5vh']}
      left={['10', '5vw']}
      src="layout/home-balls.svg"
    />
    <Image
      position="absolute"
      width={['20vw', '15vw']}
      bottom={['20vh', '5vh']}
      right={['10', '5vw']}
      src="layout/home-ball.svg"
    />

    <Center height="50%" zIndex="10">
      <Box>
        <Heading size={'2xl'} color="white" mt={8} textAlign="center">
          <b>Sistema Brasil Nordestes de Comunicação</b>
        </Heading>
        <Text fontSize={'2xl'} color="white" mt={8} textAlign="center">
          Grupo das maiores rádios do Nordeste
        </Text>
        <Center py={5}>
          <Button
            w={['80vw', '40vw', '30vw', '25vw']}
            background="contrast"
            size="lg"
            boxShadow="dark-lg"
            borderRadius={20}
          >
            Entre em contato
          </Button>
        </Center>
      </Box>
    </Center>
    <Box position="absolute" bottom={'5vh'} px="5">
      <Grid
        gap={'6vw'}
        templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
      >
        <RadioCard title="Jovem Pan Caruaru" id="jpcaruaru"></RadioCard>
        <RadioCard title="Music FM Recife" id="music"></RadioCard>
        <RadioCard title="Jovem Pan Recife" id="jprecife"></RadioCard>
        <RadioCard title="Band FM Caruaru" id="band"></RadioCard>
      </Grid>
    </Box>
  </Flex>
)

const AboutUsLayout = () => (
  <Box
    background="primary"
    py="10"
    px="10"
    position="relative"
    overflow="hidden"
  >
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
          O SBNC - Sistema Brasil Nordeste de Comunicação foi fundado em julho
          de 1983, fruto do espírito empreendedor do casal de empresários Isabel
          Christina e Ricardo de Araújo Pinto, entusiastas da radiodifusão.
          <br />
          Em quase 40 anos de atuação, o Grupo SBNC continua expandindo,
          investindo em tecnologia, recursos, profissionais, e, levando o melhor
          de sua programação com qualidade e força para cerca de 80% do estado
          de Pernambuco, 118 municípios e toda a Grande Recife, o que
          corresponde a mais de 7 milhões de pernambucanos.
        </Text>
      </Box>
    </Grid>
  </Box>
)

const ContactUsLayout = () => (
  <Box background="background" py="10" px="10">
    <Grid h="100%" templateColumns={['1fr', '1fr', '5fr 6fr']}>
      <Box w="100%" px="5" my="auto" color="white">
        <Heading color="black" size="lg" py="3">
          Anuncie conosco
        </Heading>
        <Text color="black" align="justify">
          O Grupo SBNC está presente, além das emissoras, nas multiplataformas
          de mídia como aplicativos e redes sociais e é referência no Mercado
          publicitário do Nordeste pela força das marcas, profissionalismo,
          credibilidade e inovação nas estratégias de mídia e promoção, tanto
          para as agências de publicidade quanto para o anunciante. Focando
          sempre no sucesso e crescimento de marcas e produtos.
          <br />
          Possui equipe diferenciada e motivada, sempre unida na busca de
          resultados positivos, superando expectativas.
          <br />O SBNC é um grupo de comunicação composto pelas emissoras: Jovem
          Pan Recife 95,9 FM, Music FM Recife 88,7, Jovem Pan Caruaru 101,3 e
          Band FM Caruaru 102,1.
        </Text>
      </Box>
      <Center w="100%" pt={['20', '20', '0']} alignItems="center" mx="auto">
        <Image
          overflow="hidden"
          h={[300, 400]}
          src="layout/image-bg-blue.svg"
          position="absolute"
        ></Image>
        <Image h={[160, 250]} zIndex="100" src="about2.png" />%
      </Center>
    </Grid>
  </Box>
)

const ContactInfoLayout = () => (
  <Box background="darkBackground" py={20} position="relative" overflow="auto">
    <Grid
      w="80vw"
      mx="auto"
      background="background"
      borderRadius={40}
      templateColumns={['1fr', '1fr', '3fr 2fr', '3fr 2fr']}
    >
      <ContactForm isHome />
      <Flex
        borderRadius={40}
        p={5}
        flexDirection="column"
        minHeight="400px"
        ml="auto"
        background="secondary"
        position="relative"
      >
        <Heading size="lg">Informações de Contato</Heading>
        <Text>
          Preencha o formulário e entraremos em contato com você em até 24
          horas.
        </Text>
        <Flex height="50%">
          <Stack my="auto">
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
        </Flex>
        <Box position="absolute" bottom="-2px" right="-1px">
          <SvgCornerHome height={150} color={theme.colors.primary} />
        </Box>
        {/* <Image
         
          src="layout/corner-home.svg"
        /> */}
      </Flex>
    </Grid>
  </Box>
)

const RadioCard = ({
  title,
  id
}: {
  title: string
  id: string
}): JSX.Element => {
  return (
    <Box
      background="background"
      p={2}
      px={2}
      maxH={300}
      maxW={220}
      boxShadow="xl"
      alignItems="center"
      justifyContent="center"
      borderRadius={20}
    >
      <Heading size={'md'} textAlign="center">
        {title}
      </Heading>
      <Image py={3} mx="auto" src={'logos/' + id + '.png'} />
      <Flex w="100%" alignItems="center" justifyContent="center">
        <Button
          size="xs"
          w="90%"
          maxH="0.5 rem"
          background="primary"
          color="white"
          borderRadius={20}
          alignSelf="center"
          mx="auto"
        >
          <Text fontSize={'sm'}>Saiba Mais</Text>
        </Button>
      </Flex>
    </Box>
  )
}
