import {
  Box,
  Center,
  css,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useTheme,
  VStack
} from '@chakra-ui/react'
import Calendar from '@components/Calendar'
import ContactForm from '@components/ContactForm'
import DownloadModal from '@components/DownloadModal'
import SvgVideoLayout from '@components/layout/background-video-radios'
import Header from '@components/navbar/Header'
import { IRadioData } from 'global'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'
import { getAllRadioIds, getRadioData } from '../../lib/radios'

export default function Radio({
  radioData
}: {
  radioData: IRadioData
}): JSX.Element {
  const theme = useTheme()
  const styles = css({ backdropFilter: 'blur(5px)' })(theme)
  return (
    <Box
      bgGradient="linear(to-b, primary, secondary)"
      w="100%"
      minH="100vh"
      align="center"
      justify="center"
      overflow="hidden"
      position="relative"
    >
      <Head>
        <title>{radioData.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header isHome={false} />
      <Image
        position="absolute"
        width={['20vw']}
        left={[2, 2, 2, 2, 5, 20]}
        top={['10vh']}
        zIndex="10"
        // right={['10', '5vw']}
        src="/layout-home-ball.svg"
      />
      <Image
        position="absolute"
        width={['40vw']}
        right={['5']}
        top={['50vh']}
        zIndex="10"
        // right={['10', '5vw']}
        src="/layout-home-ball.svg"
      />
      <Flex
        bg="rgba(255, 255, 255, 0.35)"
        css={styles}
        zIndex="100"
        my="auto"
        mx={[0, 0, 5, 5, 'auto']}
        position="relative"
        // w="90vw"
        maxWidth="1200px"
        padding={5}
        // h={['auto', 'auto', '89.8vh']}
        flexDirection={['column', 'column', 'row']}
        align="center"
        justify="center"
      >
        <Grid
          templateRows={['1fr', '1fr', 'repeat(16, 1fr)']}
          templateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
          w={['100vw', '70vw', '55vw']}
          h={['auto', 'auto', '85vh']}
          bg={['transparent', 'transparent', 'white']}
          borderRadius={[0, 20]}
          mr={['', '', '5%']}
        >
          <GridItem
            rowStart={['auto', 'auto', 1]}
            rowSpan={['auto', 'auto', 7]}
            colStart={['auto', 'auto', 1]}
            colSpan={['auto', 'auto', 1]}
            borderRight={['', '', '1px solid']}
            borderColor="pink.300"
            overflow="hidden"
          >
            <SocialMedia radioData={radioData} />
          </GridItem>

          <GridItem
            rowStart={['auto', 'auto', 8]}
            rowSpan={['auto', 'auto', 9]}
            colStart={['auto', 'auto', 1]}
            colSpan={['auto', 'auto', 1]}
            borderRight={['', '', '1px solid']}
            borderTop={['', '', '1px solid']}
            overflow="hidden"
            borderColor="pink.300"
            bg="white"
          >
            <AboutUS radioData={radioData} />
          </GridItem>

          <GridItem
            bg={['darkBackground', 'darkBackground', 'background']}
            color={['white', 'white', 'black']}
            overflow="hidden"
            rowStart={['auto', 'auto', 1]}
            rowSpan={['auto', 'auto', 8]}
            colStart={['auto', 'auto', 2]}
            colSpan={['auto', 'auto', 2]}
          >
            <Book radioData={radioData} />
          </GridItem>

          <GridItem
            overflow="auto"
            rowStart={['auto', 'auto', 9]}
            rowSpan={['auto', 'auto', 9]}
            colSpan={['auto', 'auto', 2]}
            colStart={['auto', 'auto', 2]}
            borderTop={['', '', '1px solid']}
            borderColor="pink.300"
            bg="white"
          >
            <ContactForm radioColor={radioData.color} />
          </GridItem>
        </Grid>

        <Flex
          flexDirection="column"
          w={['100vw', '100vw', '25vw']}
          h={['auto', 'auto', '80vh']}
          bg="white"
          borderRadius={['0', '0', 'xl']}
        >
          <Calendar
            radioColor={radioData.color}
            radioEvents={radioData.events}
          />
          <PriceTable radioColor={radioData.color} />
        </Flex>
      </Flex>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllRadioIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const radioData: IRadioData = getRadioData(params?.id)
  return {
    props: {
      radioData
    }
  }
}

function SocialMedia({ radioData }: { radioData: IRadioData }) {
  return (
    <Box mx={[10, 1]} mb={[10, '5']}>
      <Image
        borderRadius="full"
        boxSize={['200px', '90px', '120px', '150px']}
        src={'/' + radioData.id + '.png'}
        alt="Logo da Rádio"
        border="2px"
        objectFit="contain"
        borderColor="gray.200"
        mt={5}
      />

      <Heading
        fontSize={['4xl', '2xl', '2xl', '4xl']}
        align={['center', 'left']}
        fontWeight="bold"
        mt={2}
      >
        {radioData.name}
      </Heading>

      <HStack align={['center']} mt={5} spacing={['4', '1', '3', '3']}>
        <Link href={radioData.facebookLink} isExternal ml={'auto'}>
          <Image
            src="/facebook.svg"
            h={['40px', '', '25px', '35px']}
            w={['40px', '', '25px', '35px']}
          />
        </Link>
        <Link href={radioData.whatsappLink} isExternal>
          <Image
            src="/whatsapp.svg"
            h={['40px', '', '25px', '35px']}
            w={['40px', '', '25px', '35px']}
          />
        </Link>
        <Link href={radioData.instagramLink} isExternal>
          <Image
            src="/instagram.svg"
            h={['40px', '', '25px', '35px']}
            w={['40px', '', '25px', '35px']}
          />
        </Link>
        <Link href={radioData.twitterLink} isExternal mr={'auto'}>
          <Image
            src="/twitter.svg"
            h={['40px', '', '25px', '35px']}
            w={['40px', '', '25px', '35px']}
          />
        </Link>
      </HStack>
    </Box>
  )
}

function AboutUS({ radioData }: { radioData: IRadioData }) {
  return (
    <VStack alignItems="start" p={4}>
      <Heading fontWeight="bold" fontSize={['3xl', 'xl', '', '2xl']}>
        Sobre nós
      </Heading>
      <Text noOfLines={7} align="left" mb={[4, '', '', 2]}>
        {radioData.aboutUs}
      </Text>
      <Box ml={5} mr={5} w={['100%']} mb={2}>
        <ImagesCarousel />
      </Box>
    </VStack>
  )
}

function Book({ radioData }: { radioData: IRadioData }) {
  return (
    <Box position="relative" h={['100%']}>
      <Flex flexDirection="column" alignItems="start" p={4} pb={6} h="100%">
        <Heading
          fontWeight="bold"
          fontSize={['3xl', 'xl', '', '2xl']}
          mb={['5']}
        >
          Book
        </Heading>
        <Box my="auto" zIndex="100" w={['100%']} h={['250px']}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
      <Center
        p={1}
        position="absolute"
        width={['100vw', '100%', '100%']}
        height={['100%', '100%']}
        align="center"
        top={[0, 10, 5]}
        bottom="0"
        left="0"
        right={[0]}
        zIndex={0}
      >
        <SvgVideoLayout color={radioData.color} />
      </Center>
    </Box>
  )
}

function PriceTable({ radioColor }: { radioColor?: string }): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      align="center"
      borderTop={['', '1px solid grey']}
      pl={[5, 5]}
      pt={[5]}
      pr={[5]}
      borderBottomRadius="xl"
    >
      <DownloadModal isBook={true} color={radioColor} />
      {/* <DownloadModal isBook={false} color="blue.700" /> */}
    </Flex>
  )
}

function ImagesCarousel() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <Image
          className="d-block"
          width={'auto'}
          maxH={['', '180px']}
          src="https://jpimg.com.br/uploads/2018/11/RECIFE_LOGO_FM_AFILIADA_3D_VM-500x500.jpg"
          alt="Imagem Jovem pan"
        />
      </Carousel.Item>
    </Carousel>
  )
}
