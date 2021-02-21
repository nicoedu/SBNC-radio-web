import { getAllRadioIds, getRadioData } from "../../lib/radios";
import {
  Box,
  Image,
  Text,
  Link,
  VStack,
  Grid,
  GridItem,
  HStack,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Header from "@components/navbar/Header";
import ContactForm from "@components/ContactForm";
import ReactPlayer from "react-player";

export default function Radio({ radioData }): JSX.Element {
  return (
    <Box
      bgGradient="linear(to-b, primary, secondary)"
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      overflow="hidden"
    >
      <Header />
      <HStack
        bg="rgba(255, 255, 255, 0.35)"
        backdrop-filter="blur(10px)"
        w="95vw"
        h="80vh"
        mt="3%"
        align="center"
        justify="center"
      >
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          w="60vw"
          h="75vh"
          bg="white"
          mr="2%"
          borderRadius={20}
        >
          <GridItem
            rowSpan={1}
            colSpan={1}
            borderRight="1px solid"
            borderColor="pink.300"
          >
            <SocialMedia radioData={radioData} />
          </GridItem>

          <GridItem colSpan={3}>
            <Book radioData={radioData} />
          </GridItem>

          <GridItem
            rowSpan={2}
            colSpan={1}
            borderRight="1px solid"
            borderTop="1px solid"
            borderColor="pink.300"
          >
            <AboutUS radioData={radioData} />
          </GridItem>

          <GridItem
            colSpan={3}
            rowSpan={2}
            borderTop="1px solid"
            borderColor="pink.300"
          >
            <ContactForm />
          </GridItem>
        </Grid>

        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          w="20vw"
          h="70vh"
          bg="white"
          ml="2%"
        >
          <GridItem colSpan={4}>
            <Calendar radioData={radioData} />
          </GridItem>

          <GridItem colSpan={4}>
            <PriceTable radioData={radioData} />
          </GridItem>
        </Grid>
      </HStack>
    </Box>
  );
}

export async function getStaticPaths() {
  const paths = getAllRadioIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const radioData = getRadioData(params.id);
  return {
    props: {
      radioData,
    },
  };
}

function SocialMedia({ radioData }) {
  return (
    <Box ml={10}>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={"/" + radioData.name + ".png"}
        alt="Logo da Rádio"
        border="2px"
        borderColor="gray.200"
        mt={5}
      />

      <Heading fontSize="4xl" align="left" fontWeight="bold" mt={5}>
        {radioData.name}
      </Heading>

      <HStack align="center" mt={5}>
        <Link href={radioData.facebookLink} isExternal>
          <Image src="/social/facebook.svg" />
        </Link>
        <Link href={radioData.whatsappLink} isExternal>
          <Image src="/social/whatsapp.svg" />
        </Link>
        <Link href={radioData.instagramLink} isExternal>
          <Image src="/social/instagram.svg" />
        </Link>
        <Link href={radioData.twitterLink} isExternal>
          <Image src="/social/twitter.svg" />
        </Link>
      </HStack>
    </Box>
  );
}

function AboutUS({ radioData }) {
  return (
    <VStack alignItems="start" mt={5} ml={10}>
      <Heading fontWeight="bold" fontSize="2xl">
        Sobre nós
      </Heading>
      <Text noOfLines={10} align="left" fontSize="sm">
        {radioData.aboutUs}
      </Text>
      {/* TODO: Inserir carrossel de imagens */}
    </VStack>
  );
}

function Book({ radioData }) {
  return (
    <VStack alignItems="start" mt={5} ml={10}>
      <Heading fontWeight="bold" fontSize="2xl">
        Book
      </Heading>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="70%"
        height="30vh"
      />
    </VStack>
  );
}

function Calendar({ radioData }) {
  return (
    <Box h="50%" overflow="scroll">
      <Heading bg="blue.900" color="white" pb={4} pt={4}>
        Calendário Comercial
      </Heading>
      <Tabs
        isManual
        w="100%"
        orientation="vertical"
        borderBottom="1px solid pink"
      >
        <TabList>
          <Tab
            _selected={{ color: "black", bg: "blue.300" }}
            w={20}
            h={20}
            bg="blue.900"
            color="white"
          >
            Janeiro
          </Tab>
          <Tab
            _selected={{ color: "black", bg: "blue.300" }}
            w={20}
            h={20}
            bg="blue.500"
            color="white"
          >
            Fevereiro
          </Tab>
          {() => {
            let months = [];
            for (var i = 0; i < 10; i++) {
              months.push(
                <Tab
                  _selected={{ color: "black", bg: "blue.300" }}
                  w={20}
                  h={20}
                  bg="blue.900"
                  color="white"
                >
                  Março
                </Tab>
              );
            }
            return <Box> {months} </Box>;
          }}
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

function PriceTable({ radioData }) {
  return (
    <Box>
      <Heading fontWeight="bold" fontSize="2xl">
        Tabela de Valores
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        lectus ultrices, volutpat ex at, gravida mi. Cras tristique tincidunt
        metus, vel luctus nulla consequat et.
      </Text>

      <DownloadModal isBook={true} />
      <DownloadModal isBook={false} />
    </Box>
  );
}

function DownloadModal({ isBook }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonsName = isBook ? "Book" : "Tabela";
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" w={40} h={20} mb={5}>
        {"Acessar " + buttonsName}
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
  );
}
