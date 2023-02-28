import { useState, useEffect } from 'react'
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

// import loadImages from

type Image = {
  src: string
  alt: string
}

const imageArray: Image[] = [
  {
    src: '/assets/c1.jpg',
    alt: 'product1',
  },
  {
    src: '/assets/c2.jpg',
    alt: 'product2',
  },
  {
    src: '/assets/c3.jpg',
    alt: 'product3',
  },
  {
    src: '/assets/c4.jpg',
    alt: 'product4',
  },
  {
    src: '/assets/c5.jpg',
    alt: 'product5',
  },
]

const MainCarousel = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)')

  return (
    <Box pt={0}>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '0',
              color: 'white',
              padding: '5px',
              zIndex: '10',
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '0',
              color: 'white',
              padding: '5px',
              zIndex: '10',
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {imageArray.map((key, index) => (
          <Box key={`carousel-image-${index}`}>
            <img
              src={key.src}
              alt={key.alt}
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover',
                backgroundAttachment: 'fixed',
              }}
            />
            <Box
              color="white"
              padding="20px"
              borderRadius="1px"
              textAlign="left"
              sx={{
                backgroundColor: 'rgb(0, 0, 0, 0.4)',
              }}
              position="absolute"
              top="46%"
              left={isNonMobile ? '10%' : '0'}
              right={isNonMobile ? undefined : '0'}
              margin={isNonMobile ? undefined : '0 auto'}
              maxWidth={isNonMobile ? undefined : '240px'}
            >
              {/* color={shades.secondary[200]} */}
              <Typography>-- NEW ITEMS</Typography>
              <Typography variant="h1">Summer Sale</Typography>
              {/* color={shades.secondary[300]} */}
              <Typography
                fontWeight="bold"
                sx={{ textDecoration: 'underline' }}
              >
                Discover More
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default MainCarousel
