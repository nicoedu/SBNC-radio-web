/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Flex {...props} position="relative" h="100%" w="25vw" overflow="hidden">
      <Image
        position="absolute"
        width={['205px']}
        // h={['100px']}
        h="auto"
        top={['0']}
        // left={['10%']}
        left="0"
        src="white-background.png"
      />
      <Image
        src="sbnc.svg"
        position="absolute"
        h={['100px']}
        top={['0']}
        left={['10%']}
        mt={['1.5%']}
      />
    </Flex>
  )
}
