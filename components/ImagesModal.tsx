import React, { useState } from 'react'
import {
  Box,
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text
} from '@chakra-ui/react'

function ImagesModal({
  showModal,
  setShowModal,
  imageIndex,
  setImageIndex,
  images
}: {
  showModal: boolean
  imageIndex: number
  images: { name: ''; src: '' }[]
  setImageIndex: any
  setShowModal: any
}): JSX.Element {
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
      isOpen={showModal}
      size={'6xl'}
      closeOnEsc
      isCentered
      closeOnOverlayClick
    >
      <ModalOverlay />
      <ModalContent p={'0'}>
        <Box>
          <Box display={showModal ? 'block' : 'none'}>
            <Image
              position={'relative'}
              backgroundColor={'#fefefe'}
              m={'auto'}
              maxW={'90%'}
              h={'90%'}
              // h={'auto'}
              src={images[imageIndex].src}
              alt={images[imageIndex].name}
            />
          </Box>

          <Text
            color={'black'}
            position={'absolute'}
            top={'1%'}
            right={'2%'}
            fontSize={'40px'}
            fontWeight={'bold'}
            onClick={() => setShowModal(false)}
          >
            &times;
          </Text>

          <Link
            cursor={'pointer'}
            position={'absolute'}
            top={'50%'}
            left={'2%'}
            color={'black'}
            fontWeight={'bold'}
            fontSize={'40px'}
            transition={' 0.6s ease'}
            borderRadius={' 0 3px 3px 0'}
            onClick={() => {
              previousImage()
            }}
          >
            &#10094;
          </Link>
          <Link
            cursor={'pointer'}
            position={'absolute'}
            top={'50%'}
            right={'2%'}
            color={'black'}
            fontWeight={'bold'}
            fontSize={'40px'}
            transition={'0.6s ease'}
            borderRadius={'0 3px 3px 0'}
            onClick={() => {
              nextImage()
            }}
          >
            &#10095;
          </Link>
          <Box />
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default ImagesModal
