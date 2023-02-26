import { Box, Typography, IconButton, useMediaQuery } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// import { shades } from '../../theme'

// imports all images from assets folder

type GlobFn = () => Promise<Record<string, string>>
type GlobResult = Record<string, string>

type ImageObject = {
  src: string
  alt?: string
  [key: string]: any
}
const importAll = async (
  glob: () => Promise<Record<string, string>>
): Promise<ImageObject> => {
  const files = Object.entries(await glob()).reduce((acc, [key, value]) => {
    acc[key.replace(/^\.\.\/\.\.\/assets\//, '')] = value
    return acc
  }, {} as ImageObject)
  return files
}

export const heroTextureImports = await importAll(async () =>
  import.meta.glob('../../assets/*.{png,jpg,jpeg,svg}')
)
const MainCarousel = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)')
  return (
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
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
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
            <Typography fontWeight="bold" sx={{ textDecoration: 'underline' }}>
              Discover More
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  )
}

export default MainCarousel
