import { styled } from '@mui/material/styles'
import {
  Box,
  Card,
  Link,
  Typography,
  Stack,
  Button,
  Divider,
  Rating,
} from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addToCart, getTotals } from '../../features/cart/cartSlice'

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

interface ProductCardProps {
  product: {
    _id: string
    name: string
    image: string | { url: string }
    description: string
    price: number
    rating: number
    cartQuantity?: number
  }
}

export default function ProductCard(p: ProductCardProps) {
  const dispatch = useAppDispatch()

  const handleAddToCart = (p: ProductCardProps) => {
    const imageSrc =
      typeof p.product.image === 'string'
        ? p.product.image
        : p.product.image?.url
    dispatch(
      addToCart({
        _id: p.product._id,
        name: p.product.name,
        price: p.product.price,
        description: p.product.description,
        image: imageSrc,
        cartQuantity: 1,
      })
    )
    dispatch(getTotals())
  }

  return (
    <Card variant="outlined">
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledProductImg
          alt={p.product.name}
          src={
            typeof p.product.image === 'object'
              ? p.product.image.url
              : p.product.image
          }
        />
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ p: 4 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {p.product.name}
          </Typography>
        </Link>
        <Stack direction="row" justifyContent="space-between">
          <Rating name="read-only" value={p.product.rating} readOnly />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography component="span" variant="body1">
            ${p.product.price}
          </Typography>
        </Stack>
        <Button variant="outlined" onClick={() => handleAddToCart(p)}>
          Add to cart
        </Button>
      </Stack>
    </Card>
  )
}
