import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '@components/navbar/Header'
//import '../fonts/PTSansNarrow-Bold.ttf'; 

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Flex>
        <Box w={500} p={4} my={12} mx="auto">
          <Heading as="h2" mt={8} textAlign="center">
            Welcome to our home
          </Heading>
          <Text mt={8} textAlign="center">
            Ola Mundo
          </Text>
        </Box>
      </Flex>
    </>
  )
}
