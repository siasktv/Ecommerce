import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { productsFetch } from '../../features/products/productsSlice'
import { getTotals } from '../../features/cart/cartSlice'
import ProductCard from '../../components/Productcard/Productcard'
import {
  Container,
  Stack,
  Typography,
  Grid,
  Box,
  Pagination,
} from '@mui/material'
import ProductSort from '../../components/Filters/ProductSort'
import ShopFilterSidebar from '../../components/Filters/ProductFilterSideBar'

const Search: React.FC = () => {
  const products = useAppSelector((state) => state.products.products)
  // console.log("producto 1", products);

  // console.log("producto 2", products2)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(productsFetch())
    dispatch(getTotals())
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <ShopFilterSidebar />
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="space-between"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          {/* <CartWidget
            openCart={openCart}
            onOpenCart={handleOpenCart}
            onCloseCart={handleCloseCart}
          /> */}
          <Stack
            direction="row"
            spacing={1}
            flexShrink={0}
            sx={{ my: 1 }}
            // justifyContent=""
          ></Stack>
          <Stack
            direction="row"
            spacing={1}
            flexShrink={0}
            sx={{ my: 1 }}
            justifyContent="flex-end"
          >
            {/* <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
            <ProductSort />
            {/* <ShopFilterSidebar/> */}
          </Stack>
        </Stack>
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid key={p._id} item xs={12} sm={6} md={3}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
        {/* <Pagination count={3} shape="rounded" size="large" /> */}
      </Container>
    </Box>
  )
}

export default Search
