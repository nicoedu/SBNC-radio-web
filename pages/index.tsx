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
  Text,
  Link
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
      <a
        href="https://api.whatsapp.com/send?phone=5581992656003&text=Ol%C3%A1%2C%20estou%20interessado(a)%20em%20conhecer%20mais%20sobre%20voc%C3%AAs"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 3px #999',
          zIndex: 100
        }}
        target="_blank"
      >
        <i className="fa fa-whatsapp" style={{ marginTop: '16px' }}></i>
      </a>
    </>
  )
}

const HeroLayout = () => (
  <Flex
    position="relative"
    direction="column"
    minH={['100vh', '72vh', '100vh']}
    height="auto"
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

    <Center height={['50%', '50%', '45vh']} zIndex="10">
      <Box w={['90%', '100%']}>
        <Heading
          fontSize={['4xl', '5xl', '5xl', '6xl']}
          color="white"
          mt={8}
          textAlign="center"
        >
          <b>Sistema Brasil Nordestes de Comunicação</b>
        </Heading>
        <Text
          fontSize={['md', '2xl']}
          color="white"
          mt={[0, 3]}
          textAlign="center"
        >
          Grupo das maiores rádios do Nordeste
        </Text>
        <Center py={5}>
          <Button
            w={['70vw', '40vw', '30vw', '25vw']}
            background="contrast"
            size="lg"
            boxShadow="dark-lg"
            borderRadius={20}
            mb={[10]}
            mt={[0, 5]}
            _hover={{ bg: '#E7C51E', color: '#000000' }}
          >
            Entre em contato
          </Button>
        </Center>
      </Box>
    </Center>
    <Box p="5" zIndex="10">
      <Grid
        gap={['6vw', '4vw', '6vw']}
        templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
      >
        <RadioCard title="JovemPan Caruaru" id="jpcaruaru"></RadioCard>
        <RadioCard title="Music FM Recife" id="music"></RadioCard>
        <RadioCard title="JovemPan Recife" id="jprecife"></RadioCard>
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
    <Grid
      h="100%"
      templateColumns={['1fr', '1fr', '6fr 5fr']}
      maxW={'1300px'}
      mx="auto"
    >
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
    <Grid
      h="100%"
      templateColumns={['1fr', '1fr', '5fr 6fr']}
      maxW={'1300px'}
      mx="auto"
    >
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
      w={['100vw', '80vw']}
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
      <Image mx="auto" src={'logos/' + id + '.png'} />
      <Flex w="100%" alignItems="center" justifyContent="center">
        <Button
          size="md"
          w="90%"
          maxH="0.5 rem"
          background="primary"
          color="white"
          borderRadius={20}
          alignSelf="center"
          mx="auto"
          mb={2}
          _hover={{
            bg: /* '#4052B4' */ '#5268DF',
            color: '#E9E9E9',
            textDecoration: 'none'
          }}
        >
          <Link
            href={'/radios/' + id}
            fontSize={'sm'}
            _hover={{ textDecoration: 'none' }}
          >
            Saiba Mais
          </Link>
          <Text></Text>
        </Button>
      </Flex>
    </Box>
  )
}
