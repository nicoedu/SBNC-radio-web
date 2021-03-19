import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import React from 'react'

function ImagesModal({
  isOpen,
  onClose,
  text
}: {
  isOpen: boolean
  onClose: () => void
  text: string | undefined
}): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={'4xl'}
      closeOnEsc
      isCentered
      closeOnOverlayClick
    >
      <ModalOverlay />
      <ModalContent
        h={'80%'}
        minH={'300px'}
        // maxW={'100%'}
        mx={[1, 1, 'auto']}
        bg="white"
      >
        <ModalCloseButton color="black" />
        <ModalBody
          display="flex"
          height="100%"
          align="center"
          jutify="center"
          mx={'auto'}
        >
          <Box overflow="auto">
            <Heading mb={4}> Sobre nós</Heading>
            {text?.split('\n').map((value, index) => {
              return (
                <Text
                  key={index}
                  style={{ textIndent: 40 }}
                  lineHeight={1.7}
                  textAlign="justify"
                  fontSize="1.125rem"
                >
                  {value}
                </Text>
              )
            })}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImagesModal
