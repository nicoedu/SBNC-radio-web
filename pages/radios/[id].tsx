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
} from "@chakra-ui/react";
import Header from "@components/navbar/Header";
import ContactForm from "@components/ContactForm";
import ReactPlayer from "react-player";

export default function Radio({ radioData }): JSX.Element {
  return (
    <Box
      bgGradient="linear-gradient(180deg, #2E3092 0%, #D8B6B2 100%)"
      h="100vh"
      w="100%"
      align="center"
      justify="center"
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
            border="1px solid"
            borderColor="pink.300"
          >
            <SocialMedia radioData={radioData} />
          </GridItem>

          <GridItem colSpan={3} border="1px solid" borderColor="pink.300">
            <Book radioData={radioData} />
          </GridItem>

          <GridItem
            rowSpan={2}
            colSpan={1}
            border="1px solid"
            borderColor="pink.300"
          >
            <AboutUS radioData={radioData} />
          </GridItem>

          <GridItem
            colSpan={3}
            rowSpan={2}
            border="1px solid"
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
          <Calendar radioData={radioData} />
          <PriceTable radioData={radioData} />
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
  return <VStack></VStack>;
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

      <Button colorScheme="contrast"> Acessar Book </Button>
      <Button colorScheme={radioData.colorName}> Acessar Tabela </Button>
    </Box>
  );
}
