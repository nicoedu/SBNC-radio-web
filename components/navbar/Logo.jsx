import React from 'react'
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Flex {...props} position="relative" h="100%" w="25vw" overflow="hidden">
      <Image
        position="absolute"
        top={[0, -4, -6, -6]}
        // left={[0, 0, 0, 8]}
        src="logos/sbnc2.svg"
        width="auto"
        maxHeight="150%"
        zIndex="200"
      />
    </Flex>
  )
}
