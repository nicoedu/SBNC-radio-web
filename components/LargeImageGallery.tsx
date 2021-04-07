import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  useDisclosure
} from '@chakra-ui/react'
import { IRadioPhoto } from 'global'
import React, { useState } from 'react'
import ImagesModal from './ImagesModal'

function LargeImageGallery({
  images,
  color
}: {
  images: IRadioPhoto[]
  color: string
}): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <Flex zIndex={100} w="100%" flexDirection="column" h="92%">
      <ImagesModal
        isOpen={isOpen}
        onClose={onClose}
        index={imageIndex}
        images={images}
      />
      <Flex flexDirection="row" align="center" justify="center" w="100%">
        <Link
          pr={[1, 1, 5]}
          color={color}
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
        <Spacer />
        <Box w={'80%'} h={'200px'} py={2}>
          <Button as={Box} p={0} onClick={onOpen} h="100%" w="100%">
            <Image
              h="100%"
              maxW="100%"
              fallback={<Spacer />}
              src={images[imageIndex].src}
              alt={images[imageIndex].name}
            />
          </Button>
        </Box>
        <Spacer />
        <Link
          pl={[1, 1, 5]}
          color={color}
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
      <HStack overflow="auto" w="100%" align="center" justify="center">
        {images.map((image, index) => {
          return (
            <Button
              p={0}
              w="15%"
              key={image.name}
              border={index === imageIndex ? `3px solid ${color}` : '0'}
              h="60px"
              as={Box}
              onClick={() => {
                setImageIndex(index)
              }}
            >
              <Image maxW="auto" h="100%" src={image.src} alt={image.name} />
            </Button>
          )
        })}
      </HStack>
    </Flex>
  )
}

export default LargeImageGallery
