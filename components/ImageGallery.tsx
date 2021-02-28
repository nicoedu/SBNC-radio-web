import React from 'react'
import { Box, Image, Link } from '@chakra-ui/react'

function ImageGallery({
  setShowModal,
  imageIndex,
  setImageIndex,
  images
}: {
  imageIndex: number
  images: { name: string; src: string }[]
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
    <Box>
      {/* Little image */}
      <Box>
        {images.map((image, key) => (
          <Box>
            <Box position={'relative'} item xs={3} key={key}>
              <Image
                display={key === imageIndex ? 'block' : 'none'}
                src={image.src}
                alt={image.name}
                w={'100%'}
                h={['225px']}
                maxW={['', '225px']}
                cursor={'pointer'}
                onClick={() => {
                  setShowModal(true)
                }}
              />
              <Link
                cursor={'pointer'}
                position={'absolute'}
                top={'50%'}
                left={'0'}
                width={'auto'}
                padding={'16px'}
                color={'white'}
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
              <Link
                cursor={'pointer'}
                position={'absolute'}
                top={'50%'}
                right={'0'}
                width={'auto'}
                padding={'16px'}
                color={'white'}
                fontWeight={'bold'}
                fontSize={'20px'}
                transition={'0.6s ease'}
                borderRadius={'0 3px 3px 0'}
                onClick={() => {
                  nextImage()
                }}
              >
                &#10095;
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ImageGallery
