import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Flex {...props}>
      <Image
        height="4rem"
        position="relative"
        top="-2"
        left="4rem"
        src="logos/sbnc.png"
        zIndex="100"
      ></Image>
      <Image
        src="layout/logo-bg.svg"
        position="absolute"
        top="-5"
        left="5"
      ></Image>
    </Flex>
  )
}
