import { styled } from '@mui/material/styles'
import {
  Box,
  Card,
  Link,
  Typography,
  Stack,
  Button,
  Divider,
} from '@mui/material'

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

interface ProductCardProps {
  img: string
  price: number
  name: string
}

export default function ProductCard({ img, price, name }: ProductCardProps) {
  return (
    <Card variant="outlined">
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledProductImg alt={name} src={img} />
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ p: 4 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" justifyContent="space-between">
          <Typography component="span" variant="body1">
            ${price}
          </Typography>
        </Stack>
        <Button variant="outlined">Add to cart</Button>
      </Stack>
    </Card>
  )
}
