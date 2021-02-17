import { getAllRadioIds, getRadioData } from '../../lib/radios'
import { Box, Image, Stack, List, ListItem, ListIcon, Text, Link, VStack, Grid, GridItem, HStack, FormControl, FormLabel, Input, Textarea, Button, ButtonGroup} from "@chakra-ui/react"
import Header from '@components/navbar/Header'
import ReactPlayer from 'react-player'

export default function Radio({radioData}): JSX.Element {
  return (
    <Box bgGradient="linear-gradient(180deg, #2E3092 0%, #D8B6B2 100%)" h="100vh" w="100%" align="center" justify="center">
      <Header />
      <HStack bg="rgba(255, 255, 255, 0.35)" backdrop-filter="blur(10px)" w="95vw" h="80vh" mt="3%" align="center" justify="center"> 
        <Grid templateRows="repeat(6, 1fr)" templateColumns="repeat(6, 1fr)"  w="60vw" h="75vh" bg="white" mr="2%" >
          
          <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={2} border="1px solid" borderColor="pink.300">
            <SocialMedia radioData={radioData} />
          </GridItem>
          
          <GridItem colStart={3} colEnd={7} rowStart={1} rowEnd={3} border="1px solid" borderColor="pink.300">
            <Book radioData={radioData}/>
          </GridItem>

          <GridItem rowSpan={2} colSpan={2} rowStart={2} rowEnd={7} border="1px solid" borderColor="pink.300">
            <AboutUS radioData={radioData} />
          </GridItem>

          <GridItem colStart={3} colEnd={7} rowStart={3} rowEnd={7} border="1px solid" borderColor="pink.300">
            <ContactForm radioData={radioData}/>
          </GridItem>
        </Grid>

        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(4, 1fr)" gap={6} w="20vw" h="70vh" bg="white" ml="2%" >
            <GridItem colSpan={3}>
              <Calendar radioData={radioData}/>
            </GridItem>

            <GridItem colSpan={3} >
              <PriceTable radioData={radioData}/>
            </GridItem>
        </Grid>

      </HStack>
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
    <Box ml={5} aling="start"> 
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

      <HStack align="center" mt={5} mb={5}>
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
    <Box alignItems="start" mt={5} w="80%">
      <Text fontWeight="bold" fontFamily="PT Sans Narrow, sans-serif" fontSize="2xl" align="start"> Sobre nós </Text>
      <Text noOfLines={10} align="start" fontSize="sm" >
        {radioData.aboutUs}
      </Text>
      {/* TODO: Inserir carrossel de imagens */}
    </Box>
  );
}

function Book({radioData}) {
  return (
    <Box alignItems="start" mt={5} ml={10}>
      <Text fontWeight="bold" fontFamily="PT Sans Narrow, sans-serif" fontSize="2xl" align="left"> Book </Text>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="528px" height="300px" />
    </Box>
  );
}

function ContactForm({radioData}) {
  return (
    <form>
      <Box alignItems="start" ml={5} >
        
        <Text fontSize="3xl" fontWeight="bold" align="left" fontFamily="PT Sans Narrow, sans-serif" mb={3} ml={10}> 
          Fale Conosco
        </Text>
        
        <HStack w="90%" mb={3}>
          <FormControl id="first-name" isRequired mr={2}>
            <FormLabel>Primeiro nome</FormLabel>
            <Input variant="flushed" placeholder="Primeiro Nome" />
          </FormControl>

          <FormControl id="phone" isRequired>
            <FormLabel>Telefone</FormLabel>
            <Input variant="flushed" placeholder="+55(81)9999999" />
          </FormControl>
        </HStack>

        <HStack  w="90%" mb={3}>
          <FormControl id="subject" isRequired mr={2}>
            <FormLabel>Assunto</FormLabel>
            <Input variant="flushed" placeholder="O assunto" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input variant="flushed" placeholder="Seu e-mail" type="email"/>
          </FormControl>
        </HStack>

        <Textarea placeholder="Sua mensagem" w="90%" mb={3}/>

        <Button colorScheme="green" borderRadius="20px" w="153px" h="36px" type="submit"> Enviar </Button>
      </Box>
    </form>

  );
}

function Calendar({radioData}) {
  return (
    <VStack>
      
    </VStack>
  );
}

function PriceTable({radioData}) {
  return (
    <VStack m="auto">
      <Text fontWeight="bold" fontSize="2xl"> Tabela de Valores</Text>
      <Text fontSize="sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus ultrices, volutpat ex at, gravida mi. Cras tristique tincidunt metus, vel luctus nulla consequat et.</Text>

      <Button colorScheme="blue" w="100%"> Acessar Book </Button>
      <Button colorScheme="green" w="100%"> Acessar Tabela </Button>
    </VStack>
  );
}