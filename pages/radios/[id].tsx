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
        w="95vw"
        h={['auto', '90vh']}
        mt={1}
        flexDirection={['column', 'row']}
        align="center"
        justify="center"
      >
        <Grid
          templateRows={['1fr', 'repeat(16, 1fr)']}
          templateColumns={['1fr', '1fr 1fr 1fr']}
          w={['100vw', '60vw']}
          h={['auto', '85vh']}
          bg="white"
          borderRadius={[0, 20]}
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
            rowSpan={['auto', 10]}
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
            rowSpan={['auto', 8]}
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
          w={['100vw', '20vw']}
          h="70vh"
          bg="white"
          ml="2%"
        >
          <Calendar radioData={radioData} />
          <PriceTable radioData={radioData} />
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
    <Box ml={[0, 10]} mb={'5'}>
      <Image
        borderRadius="full"
        boxSize={['200px']}
        src={'/' + radioData.name + '.png'}
        alt="Logo da Rádio"
        border="2px"
        objectFit="contain"
        borderColor="gray.200"
        mt={5}
      />

      <Heading
        fontSize="4xl"
        align={['center', 'left']}
        fontWeight="bold"
        mt={2}
      >
        {radioData.name}
      </Heading>

      <HStack align={'center'} mt={5} spacing={'4'}>
        <Link href={radioData.facebookLink} isExternal ml={'auto'}>
          <Image src="/social/facebook.svg" />
        </Link>
        <Link href={radioData.whatsappLink} isExternal>
          <Image src="/social/whatsapp.svg" />
        </Link>
        <Link href={radioData.instagramLink} isExternal>
          <Image src="/social/instagram.svg" />
        </Link>
        <Link href={radioData.twitterLink} isExternal mr={'auto'}>
          <Image src="/social/twitter.svg" />
        </Link>
      </HStack>
    </Box>
  )
}

function AboutUS({ radioData }: { radioData: IRadioData }) {
  return (
    <VStack alignItems="start" p={4}>
      <Heading fontWeight="bold" fontSize={['3xl', '2xl']}>
        Sobre nós
      </Heading>
      <Text noOfLines={10} align="left" fontSize="sm">
        {radioData.aboutUs}
      </Text>
      {/* TODO: Inserir carrossel de imagens */}
    </VStack>
  )
}

function Book({ radioData }: { radioData: IRadioData }) {
  return (
    <Box position="relative" overflow="hidden" h="100%">
      <Flex flexDirection="column" alignItems="start" p={4} pb={6}>
        <Heading fontWeight="bold" fontSize={['3xl']} mb={['5']}>
          Book
        </Heading>
        <Box alignSelf="center" zIndex="100">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="90vw"
            height="252px"
          />
        </Box>
      </Flex>
      <Center
        position="absolute"
        width={['100vw', '100%']}
        height={['100%', '80%']}
        align="center"
        top={[14, 0]}
        bottom="0"
        left="0"
        right={[0]}
      >
        <SvgVideoLayout height="90%" width="90%" color={radioData.color} />
      </Center>
    </Box>
  )
}

function Calendar({ radioData }) {
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
    <Box h="50%" overflow="scroll">
      <Heading bg="blue.900" color="white" pb={4} pt={4}>
        Calendário comercial
      </Heading>
      <Tabs isManual w="100%" orientation="vertical" border="0">
        <TabList>
          {months.map((value, index) => {
            return (
              <Tab
                _selected={{ color: 'black', bg: 'blue.300' }}
                w={20}
                h={20}
                bg={index % 2 === 0 ? 'blue.900' : 'blue.500'}
                color="white"
              >
                {value}
              </Tab>
            )
          })}
        </TabList>
        <TabPanels>
          {months.map((value, index) => {
            return (
              <TabPanel>
                <VStack>
                  <HStack>
                    <Box w={[20]} h={[20]} background={['gray.300']}></Box>
                    <Box w={[20]} h={[20]} background={['gray.300']}></Box>
                    <Box w={[20]} h={[20]} background={['gray.300']}></Box>
                  </HStack>

                  <HStack>
                    <Box w={[20]} h={[20]} background={['gray.300']}></Box>
                    <Box w={[20]} h={[20]} background={['gray.300']}></Box>
                    <Box w={[20]} h={[20]} background={['gray.300']}></Box>
                  </HStack>
                </VStack>
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

function PriceTable({ radioData }: { radioData: IRadioData }) {
  return (
    <Flex flexDirection="column" align="center">
      <Heading fontWeight="bold" fontSize="2xl">
        Tabela de Valores
      </Heading>
      <Text mb={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        lectus ultrices, volutpat ex at, gravida mi. Cras tristique tincidunt
        metus, vel luctus nulla consequat et.
      </Text>

      <DownloadModal isBook={true} color={radioData.color} />
      <DownloadModal isBook={false} color="blue" />
    </Flex>
  )
}

function DownloadModal({ isBook, color }: { isBook: boolean; color: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonsName = isBook ? 'Book' : 'Tabela'
  return (
    <>
      <Button onClick={onOpen} colorScheme={color} w={40} h={10} mb={5}>
        {'Acessar ' + buttonsName}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
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
            <Button colorScheme="red" mr={3} onClick={onClose} d="block" h={50}>
              Receber tabela por e-mail
            </Button>
            <Button variant="ghost" onClick={onClose} d="block">
              Não agora, obrigado!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
