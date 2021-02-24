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
            rowStart={['auto', 9]}
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
          h={['130vh', '80vh']}
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
        boxSize={['200px', '90px', '120px', '150px']}
        src={'/' + radioData.name + '.png'}
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
            src="/social/facebook.svg"
            h={['40px', '', '25px', '35px']}
            w={['40px', '', '25px', '35px']}
          />
        </Link>
        <Link href={radioData.whatsappLink} isExternal>
          <Image
            src="/social/whatsapp.svg"
            h={['40px', '', '25px', '35px']}
            w={['40px', '', '25px', '35px']}
          />
        </Link>
        <Link href={radioData.instagramLink} isExternal>
          <Image
            src="/social/instagram.svg"
            h={['40px', '', '25px', '35px']}
            w={['40px', '', '25px', '35px']}
          />
        </Link>
        <Link href={radioData.twitterLink} isExternal mr={'auto'}>
          <Image
            src="/social/twitter.svg"
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
      <Box ml={5} mr={5} w={['100%']} h={['40px']} mb={2}>
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
            {months.map((value, index) => {
              return (
                <TabPanel pt={['', 1, '', 2]} pl={['', '', '', 2]}>
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
        h={['15%', '25px', '33px', '45px']}
        w={['50%', '80%', '60%', '60%']}
        mb={[5, 1, 2, 2]}
        _hover={{ bg: color }}
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
          width={'100%'}
          height={'auto'}
          src="https://jpimg.com.br/uploads/2018/11/RECIFE_LOGO_FM_AFILIADA_3D_VM-500x500.jpg"
          alt="Imagem Jovem pan"
        />
      </Carousel.Item>{' '}
    </Carousel>
  )
}
