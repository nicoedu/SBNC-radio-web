import {
  Box,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function ImagesModal({
  isOpen,
  onClose,
  index,
  images
}: {
  isOpen: boolean
  onClose: () => void
  index: number
  images: { name: string; src: string }[]
}): JSX.Element {
  const [imageIndex, setImageIndex] = useState(index)

  useEffect(() => {
    if (isOpen) {
      setImageIndex(index)
    }
  }, [isOpen])

  function nextImage() {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1)
    } else {
      setImageIndex(0)
    }
  }

  function previousImage() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1)
    } else {
      setImageIndex(images.length - 1)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={'6xl'}
      closeOnEsc
      isCentered
      closeOnOverlayClick
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent maxH={'90%'} maxW={'100%'} mx={1}>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="row" align="center" justify="center">
            <Link
              pr={1}
              color={'black'}
              fontWeight={'bold'}
              fontSize={'3rem'}
              transition={' 0.6s ease'}
              borderRadius={' 0 3px 3px 0'}
              _hover={{ textDecoration: 'none' }}
              onClick={() => {
                previousImage()
              }}
            >
              &#10094;
            </Link>
            <Image
              backgroundColor={'#fefefe'}
              m={'auto'}
              maxW={'80%'}
              maxH={'90vh'}
              pt={'4%'}
              pb={'4%'}
              src={images[imageIndex].src}
              alt={images[imageIndex].name}
            />
            <Link
              pl={1}
              color={'black'}
              fontWeight={'bold'}
              fontSize={'3rem'}
              transition={'0.6s ease'}
              _hover={{ textDecoration: 'none' }}
              borderRadius={'0 3px 3px 0'}
              onClick={() => {
                nextImage()
              }}
            >
              &#10095;
            </Link>
            <Box />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImagesModal
