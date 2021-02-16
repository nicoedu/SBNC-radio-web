import { getAllRadioIds, getRadioData } from '../../lib/radios'
import { Box, Image, Stack, List, ListItem, ListIcon, Text, Link, VStack, Grid, GridItem, HStack, Divider} from "@chakra-ui/react"
import Header from '@components/navbar/Header'

export default function Radio({radioData}): JSX.Element {
  return (
    <Box bgGradient="linear-gradient(180deg, #2E3092 0%, #D8B6B2 100%)" h="100vh" w="100%" align="center" justify="center">
      <Header />
      <Box bg="rgba(255, 255, 255, 0.35)" backdrop-filter="blur(10px)" w="95vw" h="80vh" mt="3%"> 
        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(4, 1fr)" gap={0} w="55vw" h="70vh" bg="white" mr="2%">
          
          <GridItem rowSpan={1} colSpan={1} ml={10}>
            <SocialMedia radioData={radioData} />
          </GridItem>
          
          <GridItem colSpan={2}></GridItem>

          <GridItem colSpan={1}></GridItem>

          
          <GridItem rowSpan={2} colSpan={1} ml={10}>
            <AboutUS radioData={radioData} />
          </GridItem>
          
          {/* <GridItem>
            <Box w="30vw" h="60vh" bg="white"> 

            </Box>
          </GridItem> */}

        </Grid>
      </Box>
    </Box>
  );
}

export async function getStaticPaths() {
  const paths = getAllRadioIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const radioData = getRadioData(params.id)
  return {
    props: {
      radioData
    }
  }
}

function SocialMedia({radioData}) {
  return (
    <Box > 
      <Image
        borderRadius="full"
        boxSize="150px"
        src={"/" + radioData.name + ".png"}
        alt="Logo da Rádio"
        border="2px" borderColor="gray.200"
        mt={5}
      />

      <Text fontSize="4xl" align="left" fontWeight="bold" fontFamily="PT Sans Narrow, sans-serif" mt={5}> 
        {radioData.name} 
      </Text>

      <HStack align="center" mt={5}>
        <Link href={radioData.facebookLink} isExternal>
          <Image src="/facebook.svg" />
        </Link>
        <Link href={radioData.whatsappLink} isExternal>
          <Image src="/whatsapp.svg" />
        </Link>
        <Link href={radioData.instagramLink} isExternal>
          <Image src="/instagram.svg" />
        </Link>
        <Link href={radioData.twitterLink} isExternal>
          <Image src="/twitter.svg" />
        </Link>
      </HStack>
  </Box>
  );
}

function AboutUS({radioData}) {
  return (
    <VStack alignItems="start" mt={5}>
      <Text fontWeight="bold" fontFamily="PT Sans Narrow, sans-serif" fontSize="2xl">
        Sobre nós
      </Text>
      <Text noOfLines={10} align="left" fontSize="sm">
        {radioData.aboutUs}
      </Text>
      {/* TODO: Inserir carrossel de imagens */}
    </VStack>
  );
}

function Book({radioData}) {
  return (
    <VStack>
      <Text> Book </Text>
      {/* TODO: Inserir vídeo aqui */}
    </VStack>
  );
}