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

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addToCart } from '../../features/cart/cartSlice'

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
    image: string
    description: string
    price: number
    rating: number
    cartQuantity?: number
  }
}

export default function ProductCard(p: ProductCardProps) {
  const dispatch = useAppDispatch()

  const handleAddToCart = (p: ProductCardProps) => {
    dispatch(
      addToCart({
        _id: p.product._id,
        name: p.product.name,
        price: p.product.price,
        description: p.product.description,
        image: p.product.image,
        cartQuantity: 1,
      })
    )
  }

  console.log(p)

  return (
    <Card variant="outlined">
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledProductImg alt={p.product.name} src={p.product.image} />
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ p: 4 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {p.product.name}
          </Typography>
        </Link>

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
