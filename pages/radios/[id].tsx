import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
  Tab
} from '@chakra-ui/react'
import ContactForm from '@components/ContactForm'
import SvgVideoLayout from '@components/layout/background-video-radios'
import Header from '@components/navbar/Header'
import { IRadioData } from 'global'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactPlayer from 'react-player'
import { getAllRadioIds, getRadioData } from '../../lib/radios'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Radio({
  radioData
}: {
  radioData: IRadioData
}): JSX.Element {
  return (
    <Box
      bgGradient="linear(to-b, primary, secondary)"
      w="100%"
      align="center"
      justify="center"
      overflow="hidden"
    >
      <Header />
      <Flex
        bg="rgba(255, 255, 255, 0.35)"
        backdrop-filter="blur(10px)"
        w="90vw"
        h={['auto', '89.8vh']}
        flexDirection={['column', 'row']}
        align="center"
        justify="center"
      >
        <Grid
          templateRows={['1fr', 'repeat(16, 1fr)']}
          templateColumns={['1fr', '1fr 1fr 1fr']}
          w={['100vw', '55vw']}
          h={['auto', '85vh']}
          bg="white"
          borderRadius={[0, 20]}
          mr={['', '05%']}
        >
          <GridItem
            rowStart={['auto', 1]}
            rowSpan={['auto', 7]}
            colStart={['auto', 1]}
            colSpan={['auto', 1]}
            borderRight={['', '1px solid']}
            borderColor="pink.300"
            overflow="hidden"
          >
            <SocialMedia radioData={radioData} />
          </GridItem>

          <GridItem
            overflow="hidden"
            rowStart={['auto', 1]}
            rowSpan={['auto', 8]}
            colStart={['auto', 2]}
            colSpan={['auto', 2]}
          >
            <Book radioData={radioData} />
          </GridItem>

          <GridItem
            rowStart={['auto', 8]}
            rowSpan={['auto', 9]}
            colStart={['auto', 1]}
            colSpan={['auto', 1]}
            borderRight={['', '1px solid']}
            borderTop={['', '1px solid']}
            overflow="hidden"
            borderColor="pink.300"
          >
            <AboutUS radioData={radioData} />
          </GridItem>
          <GridItem
            overflow="auto"
            rowStart={['auto', 8, 8]}
            rowSpan={['auto', 9]}
            colSpan={['auto', 2]}
            colStart={['auto', 2]}
            borderTop={['', '1px solid']}
            borderColor="pink.300"
          >
            <ContactForm radioColor={radioData.color} />
          </GridItem>
        </Grid>

        <Flex
          flexDirection="column"
          w={['100vw', '25vw']}
          h={['100vh', '80vh']}
          bg="white"
          borderRadius={['', 'xl', 'xl', 'xl']}
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
        boxSize={['200px', '90px', '120px', '180px']}
        src={'/' + radioData.name + '.png'}
        alt="Logo da Rádio"
        border="2px"
        objectFit="contain"
        borderColor="gray.200"
        mt={5}
      />

      <Heading
        fontSize={['4xl', '2xl', '3xl', '4xl']}
        align={['center', 'left']}
        fontWeight="bold"
        mt={2}
      >
        {radioData.name}
      </Heading>

      <HStack align={['center']} mt={5} spacing={['4', '1', '4', '5']}>
        <Link href={radioData.facebookLink} isExternal ml={'auto'}>
          <Image
            src="/social/facebook.svg"
            h={['40px', '', '', '40px']}
            w={['40px', '', '', '40px']}
          />
        </Link>
        <Link href={radioData.whatsappLink} isExternal>
          <Image
            src="/social/whatsapp.svg"
            h={['40px', '', '', '40px']}
            w={['40px', '', '', '40px']}
          />
        </Link>
        <Link href={radioData.instagramLink} isExternal>
          <Image
            src="/social/instagram.svg"
            h={['40px', '', '', '40px']}
            w={['40px', '', '', '40px']}
          />
        </Link>
        <Link href={radioData.twitterLink} isExternal mr={'auto'}>
          <Image
            src="/social/twitter.svg"
            h={['40px', '', '', '40px']}
            w={['40px', '', '', '40px']}
          />
        </Link>
      </HStack>
    </Box>
  )
}

function AboutUS({ radioData }: { radioData: IRadioData }) {
  return (
    <VStack alignItems="start" p={4}>
      <Heading fontWeight="bold" fontSize={['3xl', 'xl', '', '3xl']}>
        Sobre nós
      </Heading>
      <Text
        noOfLines={7}
        align="left"
        fontSize={['sm', 'xs', '', 'md']}
        mb={[4, '', '', 5]}
      >
        {radioData.aboutUs}
      </Text>
      <Box ml={4} mr={4} w={'100%'} mb={2}>
        <ImagesCarousel />
      </Box>
    </VStack>
  )
}

function Book({ radioData }: { radioData: IRadioData }) {
  return (
    <Box position="relative" overflow="hidden" h={['100%']}>
      <Flex flexDirection="column" alignItems="start" p={4} pb={6}>
        <Heading
          fontWeight="bold"
          fontSize={['3xl', 'xl', '', '4xl']}
          mb={['5']}
        >
          Book
        </Heading>
        <Box alignSelf="center" zIndex="100">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="30vw" //sm - 90vw
            height="180px" //sm - 252px
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
      h={['50%', '55%']}
      w={['100%', '90%']}
      ml={['auto']}
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
        fontSize={['xl', 'md', 'lg', '4xl']}
      >
        Calendário comercial
      </Heading>

      <Box h={'100%'} overflowY="scroll" overflowX="hidden">
        <Tabs isManual w="100%" orientation="vertical" border="0">
          <TabList>
            {months.map((value, index) => {
              return (
                <Tab
                  _selected={{ color: 'black', bg: 'blue.300' }}
                  w={['100px', 14, '70px', '100px']}
                  h={['90px', 10, '70px', '100px']}
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
            {months.map((value, index) => {
              return (
                <TabPanel p={['', 0]} pt={['', 1, '', 5]} pl={['', '', '', 0]}>
                  <VStack>
                    <HStack>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                    </HStack>
                    <HStack>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                    </HStack>
                    <HStack>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                    </HStack>
                    <HStack>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
                        background={['gray.300']}
                      ></Box>
                      <Box
                        w={[20, 8, '60px', '80px']}
                        h={[20, 8, '60px', '80px']}
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
      h={'50%'}
      pl={[5, 5]}
      pr={[5]}
      borderBottomRadius="xl"
    >
      <Heading
        fontWeight="bold"
        fontSize={['3xl', 'xl', '', '4xl']}
        mb={[5, 3]}
        mt={5}
        textAlign="left"
        w={'100%'}
      >
        Tabela de Valores
      </Heading>
      <Text mb={[10, 5]} textAlign="left" fontSize={['md', 'xs', '', 'md']}>
        Aqui você pode baixar nossa tabela de preços e conhecer mais do nosso
        book
      </Text>

      <DownloadModal isBook={true} color={radioColor} />
      <DownloadModal isBook={false} color="blue.700" />
    </Flex>
  )
}

function DownloadModal({
  isBook,
  color
}: {
  isBook?: boolean
  color?: string
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonsName = isBook ? 'Book' : 'Tabela'
  return (
    <>
      <Button
        onClick={onOpen}
        bg={color}
        color={'gray.200'}
        size="sm" //Mobile - XL
        mb={[5, 2]}
      >
        {'Acessar ' + buttonsName}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={30}>
          <ModalHeader
            bg="red"
            color="white"
            borderTopRadius={30}
            pt={7}
            pb={7}
          >
            <Heading align="center">
              Baixe {buttonsName.toLowerCase()} agora mesmo
            </Heading>
          </ModalHeader>
          <ModalBody>
            <FormControl id="first-name" isRequired mt={5}>
              <FormLabel>Nome</FormLabel>
              <Input
                variant="outline"
                placeholder="Seu nome"
                borderRadius={30}
              />
            </FormControl>

            <FormControl id="phone" isRequired mt={5}>
              <FormLabel>Telefone</FormLabel>
              <Input
                variant="outline"
                borderRadius={30}
                placeholder="+55(81)9999999"
              />
            </FormControl>

            <FormControl id="email" isRequired mt={5}>
              <FormLabel>E-mail</FormLabel>
              <Input
                variant="outline"
                borderRadius={30}
                placeholder="Seu e-mail"
                type="email"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter mt={5}>
            <Button
              colorScheme="red"
              onClick={onClose}
              d="block"
              size={'lg'}
              fontSize={['sm']}
            >
              {'Receber ' + buttonsName}
            </Button>
            <Button
              variant="ghost"
              onClick={onClose}
              d="block"
              fontSize={['sm']}
            >
              Não agora, obrigado!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function ImagesCarousel() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block"
          width={['90%', '80%', '80%']}
          src="data:image/jpeg;base64,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"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Aquele dia</h3>
          <p>Minha imagem</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
