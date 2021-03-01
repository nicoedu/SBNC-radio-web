import {
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer
} from '@chakra-ui/react'
import { IRadioPhoto } from 'global'
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
  images: IRadioPhoto[]
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
      size={'4xl'}
      closeOnEsc
      isCentered
      closeOnOverlayClick
    >
      <ModalOverlay />
      <ModalContent
        maxH={'90%'}
        minH={'300px'}
        // maxW={'100%'}
        mx={[1, 1, 'auto']}
        bg="darkBackground"
      >
        <ModalCloseButton color="white" />
        <ModalBody
          display="flex"
          height="100%"
          align="center"
          jutify="center"
          mx={'auto'}
        >
          <Flex flexDirection="row" align="center" justify="center">
            <Link
              pr={[1, 1, 5]}
              color={'white'}
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
              // m={'auto'}
              maxW={'80%'}
              maxH={'90vh'}
              fallback={<Spacer />}
              py={5}
              src={images[imageIndex].src}
              alt={images[imageIndex].name}
            />
            <Link
              pl={[1, 1, 5]}
              color={'white'}
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
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImagesModal
