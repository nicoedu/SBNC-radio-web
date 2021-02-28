import { Box, HStack, Image, Link, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ImagesModal from './ImagesModal'

function ImageSlide({
  onOpen,
  images,
  imageIndex
}: {
  onOpen: (index: number) => void
  images: { src: string; name: string }[]
  imageIndex: number
}): JSX.Element {
  return imageIndex < images.length ? (
    <Image
      my="auto"
      src={images[imageIndex].src}
      alt={images[imageIndex].name}
      w={'28%'}
      fallback={<Box w={'28%'} h={['70px']} maxW={['', '225px']}></Box>}
      h={['70px']}
      maxW={['', '225px']}
      cursor={'pointer'}
      onClick={() => {
        onOpen(imageIndex)
      }}
    />
  ) : (
    <Box w={'28%'} h={['70px']} maxW={['', '225px']}></Box>
  )
}

function ImageGallery({
  images
}: {
  images: { src: string; name: string }[]
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [imageIndex, setImageIndex] = useState(0)

  function openModal(index: number) {
    setImageIndex(index)
    onOpen()
  }

  function nextImage() {
    if (imageIndex < images.length - 3) {
      setImageIndex(imageIndex + 3)
    } else {
      setImageIndex(0)
    }
  }

  function previousImage() {
    if (imageIndex > 2) {
      setImageIndex(imageIndex - 3)
    } else {
      setImageIndex(images.length - (images.length % 3))
    }
  }

  return (
    <Box position={'relative'} xs={3}>
      <ImagesModal
        isOpen={isOpen}
        onClose={onClose}
        index={imageIndex}
        images={images}
      />
      <HStack align="center" justify="center">
        <Link
          // position={'absolute'}
          _hover={{ textDecoration: 'none' }}
          // top={'50%'}
          // left={'0'}
          m={0}
          width={'auto'}
          color={'black'}
          fontWeight={'bold'}
          fontSize={' 20px'}
          transition={' 0.6s ease'}
          borderRadius={' 0 3px 3px 0'}
          onClick={() => {
            previousImage()
          }}
        >
          &#10094;
        </Link>
        <ImageSlide
          onOpen={openModal}
          images={images}
          imageIndex={imageIndex}
        />
        <ImageSlide
          onOpen={openModal}
          images={images}
          imageIndex={imageIndex + 1}
        />
        <ImageSlide
          onOpen={openModal}
          images={images}
          imageIndex={imageIndex + 2}
        />

        <Link
          _hover={{ textDecoration: 'none' }}
          width={'auto'}
          color={'black'}
          fontWeight={'bold'}
          m={0}
          fontSize={'20px'}
          transition={'0.6s ease'}
          borderRadius={'0 3px 3px 0'}
          onClick={() => {
            nextImage()
          }}
        >
          &#10095;
        </Link>
      </HStack>
    </Box>
  )
}

export default ImageGallery
