import {
  Box,
  Collapse,
  Flex,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react'
import { IRadioEvent } from 'global'
import { getRadioData } from 'lib/radios'
import { useState } from 'react'

function CalendarEvent({
  radioColor,
  radioEvent
}: {
  radioColor?: string
  radioEvent: IRadioEvent
}) {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <Box
      width={['90%']}
      ml={['5%']}
      mr={['5%']}
      mt={['5%']}
      boxShadow="lg"
      onClick={handleToggle}
      borderRadius="lg"
      border={'1px solid #B1B1B1'}
      position={'relative'}
    >
      <Collapse startingHeight={'110px'} in={show}>
        <Box
          position={'absolute'}
          bg={radioColor}
          w={'50px'}
          h={['50px']}
          right={'0'}
          borderTopRightRadius={'lg'}
          borderBottomLeftRadius={'110px'}
          textAlign={'center'}
          verticalAlign={'middle'}
        >
          <Heading
            fontWeight={'bold'}
            color={'white'}
            fontSize={'xl'}
            mt={['09px']}
            ml={['06px']}
          >
            {radioEvent.month}
          </Heading>
        </Box>

        <HStack mt={3}>
          <Image
            src={
              radioEvent.photoUrl === ' '
                ? radioEvent.photoUrl
                : '/Festa-Pan.png'
            }
            w={['80px']}
            h={['80px']}
            alignSelf="flex-start"
            mx={2}
            mt={1}
          />

          <Box mr={'3%'}>
            <Heading
              fontWeight={'bold'}
              fontSize={'xl'}
              textAlign={'left'}
              ml={'auto'}
            >
              {radioEvent.title}
            </Heading>
            <Box>
              <Text
                fontSize={'xs'}
                noOfLines={!show ? 3 : undefined}
                textAlign={'left'}
              >
                {radioEvent.description}
              </Text>
              <Text
                cursor={'pointer'}
                align="start"
                fontSize={'xs'}
                fontWeight={'bold'}
                color={radioColor}
                mt={'0.5%'}
              >
                {!show ? 'Ler mais' : 'Ler menos'}
              </Text>
            </Box>
          </Box>
        </HStack>
      </Collapse>
    </Box>
  )
}

export default function Calendar({
  radioColor,
  radioEvents
}: {
  radioColor?: string
  radioEvents?: [IRadioEvent]
}): JSX.Element {
  return (
    <Flex
      h={['80%']}
      w={['100%']}
      ml={'auto'}
      mr={['', 'auto']}
      mb={['', '5']}
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

      <Box pr={1}>
        <Flex
          w={['100%']}
          direction="column"
          overflowY={'auto'}
          maxH={['auto', '60vh']}
          sx={{
            '&::-webkit-scrollbar': {
              width: '10px',
              borderRadius: '20px'
            },
            '&::-webkit-scrollbar-track': {
              width: '6px'
              // marginRight: '100px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: radioColor,
              borderRadius: '80px'
            },
            '&::-webkit-scrollbar-track-piece:end': {
              marginBottom: '15vh',
              background: 'lightgray',
              marginRight: '20px'
            },
            '&::-webkit-scrollbar-track-piece:start': {
              marginTop: '15vh',
              background: 'lightgray'
            }
          }}
        >
          {radioEvents?.map((value) => (
            <CalendarEvent
              key={value.title}
              radioColor={radioColor}
              radioEvent={value}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
