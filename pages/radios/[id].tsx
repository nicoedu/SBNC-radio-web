import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useTheme,
  VStack,
  css
} from '@chakra-ui/react'
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
      // overflow="hidden"
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
        left={['2']}
        top={['10vh']}
        zIndex="10"
        // right={['10', '5vw']}
        src="/layout-home-ball.svg"
      />
      <Flex
        bg="rgba(255, 255, 255, 0.35)"
        css={styles}
        zIndex="100"
        my="auto"
        position="relative"
        w="90vw"
        h={['auto', 'auto', '89.8vh']}
        flexDirection={['column', 'column', 'row']}
        align="center"
        justify="center"
      >
        <Grid
          templateRows={['1fr', '1fr', 'repeat(16, 1fr)']}
          templateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
          w={['100vw', '55vw']}
          h={['auto', 'auto', '85vh']}
          bg="white"
          borderRadius={[0, 20]}
          mr={['', '05%']}
        >
          <GridItem
            rowStart={['auto', 'auto', 1]}
            rowSpan={['auto', 'auto', 7]}
            colStart={['auto', 'auto', 1]}
            colSpan={['auto', 'auto', 1]}
            borderRight={['', '1px solid']}
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
            borderRight={['', '1px solid']}
            borderTop={['', '1px solid']}
            overflow="hidden"
            borderColor="pink.300"
          >
            <AboutUS radioData={radioData} />
          </GridItem>

          <GridItem
            bg={['darkBackground', 'darkBackground', 'background']}
            color={['white', 'white', null]}
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
            borderTop={['', '1px solid']}
            borderColor="pink.300"
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
          <Calendar radioColor={radioData.color} />
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
    <Box ml={[0, 1]} mr={[0, 1]} mb={'5'}>
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
      <Text
        noOfLines={7}
        align="left"
        fontSize={['sm', 'xs', '', 'xs']}
        mb={[4, '', '', 2]}
      >
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
      <Flex flexDirection="column" alignItems="start" p={4} pb={6}>
        <Heading
          fontWeight="bold"
          fontSize={['3xl', 'xl', '', '2xl']}
          mb={['5']}
        >
          Book
        </Heading>
        <Box alignSelf="center" zIndex="100" w={['100%']} h={['250px']}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
      <Center
        position="absolute"
        width={['100vw', '100%']}
        height={['100%', '100%']}
        align="center"
        top={[14, 0]}
        bottom="0"
        left="0"
        right={[0]}
        zIndex={0}
      >
        <SvgVideoLayout height="90%" width="90%" color={radioData.color} />
      </Center>
    </Box>
  )
}

function Calendar({ radioColor }: { radioColor?: string }): JSX.Element {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  return (
    <Flex
      h={['48%', '55%']}
      w={['100%', '90%']}
      ml={'auto'}
      mt={['5', '5']}
      mr={['', 'auto']}
      mb={['', '5']}
      border={['1px solid black']}
      direction="column"
    >
      <Heading
        bg={radioColor}
        color="white"
        pb={4}
        pt={4}
        fontSize={['xl', 'md', 'lg', '2xl', '2xl']}
      >
        Calendário comercial
      </Heading>

      <Box h={'100%'} overflowY="scroll" overflowX="hidden">
        <Tabs isManual w="100%" orientation="vertical" border="0">
          <TabList>
            {months.map((value, index) => {
              return (
                <Tab
                  key={value}
                  _selected={{ color: 'black', bg: 'blue.300' }}
                  w={['100px', 14, '70px', '80px']}
                  h={['90px', 10, '70px', '80px']}
                  bg={index % 2 === 0 ? 'blue.900' : 'blue.500'}
                  color="white"
                  fontSize={['md', 'xs', '', 'md']}
                >
                  {value}
                </Tab>
              )
            })}
          </TabList>
          <TabPanels>
            {months.map((value) => {
              return (
                <TabPanel key={value} pt={['', 1, '', 2]} pl={['', '', '', 2]}>
                  <VStack>
                    <HStack mb={['', '', '', 2]}>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                    </HStack>
                    <HStack mb={['', '', '', 2]}>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                    </HStack>
                    <HStack mb={['', '', '', 2]}>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                    </HStack>
                    <HStack mb={['', '', '', 2]}>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '55px', '55px']}
                        h={[20, 8, '55px', '55px']}
                        background={['gray.300']}
                      ></Box>
                    </HStack>
                  </VStack>
                </TabPanel>
              )
            })}
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  )
}

function PriceTable({ radioColor }: { radioColor?: string }): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      align="center"
      borderTop={['', '1px solid grey']}
      h={['50%']}
      pl={[5, 5]}
      pr={[5]}
      borderBottomRadius="xl"
    >
      <Heading
        fontWeight="bold"
        fontSize={['3xl', 'xl', '', '2xl']}
        mb={[5, 3]}
        mt={5}
        textAlign="left"
        w={'100%'}
      >
        Tabela de Valores
      </Heading>
      <Text
        mb={[10, 5, 3, 5]}
        textAlign="left"
        fontSize={['md', 'xs', '', 'sm']}
      >
        Aqui você pode baixar nossa tabela de preços e conhecer mais do nosso
        book
      </Text>

      <DownloadModal isBook={true} color={radioColor} />
      <DownloadModal isBook={false} color="blue.700" />
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
