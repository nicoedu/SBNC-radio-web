import {
  background,
  Box,
  Flex,
  Image,
  Link,
  useDisclosure
} from '@chakra-ui/react'
import { IRadioPhoto } from 'global'
import React, { useState } from 'react'
import ImagesModal from './ImagesModal'

function ImageSlide({
  onOpen,
  images,
  imageIndex
}: {
  onOpen: (index: number) => void
  images: IRadioPhoto[]
  imageIndex: number
}): JSX.Element {
  return imageIndex < images.length ? (
    <Box
      w={'25%'}
      h={['70px']}
      maxW={['', '225px']}
      bg={'#EDF2F6'}
      display={'flex'}
      alignItems={'center'}
    >
      <Image
        my="auto"
        src={images[imageIndex].src}
        alt={images[imageIndex].name}
        w={'100%'}
        fallback={<Box w={'25%'} h={['70px']} maxW={['', '225px']}></Box>}
        maxW={['', '225px']}
        cursor={'pointer'}
        onClick={() => {
          onOpen(imageIndex)
        }}
      />
    </Box>
  ) : (
    <Box w={'25%'} h={['70px']} maxW={['', '225px']}></Box>
  )
}

function ImageGallery({
  images,
  radioColor
}: {
  images: IRadioPhoto[]
  radioColor?: string
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
    <>
      <ImagesModal
        isOpen={isOpen}
        onClose={onClose}
        index={imageIndex}
        images={images}
      />
      <Flex
        px={[0, 0, 1]}
        flexDirection="row"
        align="center"
        justify="space-between"
        minH={'100px'}
      >
        <Link
          _hover={{ textDecoration: 'none' }}
          m={0}
          width={'auto'}
          color={radioColor}
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
          color={radioColor}
          fontWeight={'bold'}
          m={0}
          marginInlineStart={0}
          fontSize={'20px'}
          transition={'0.6s ease'}
          borderRadius={'0 3px 3px 0'}
          onClick={() => {
            nextImage()
          }}
        >
          &#10095;
        </Link>
      </Flex>
    </>
  )
}

export default ImageGallery
