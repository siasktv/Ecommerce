import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"; 
import { productsFetch } from "../../features/products/productsSlice";
import ProductCard from "../../components/Productcard/Productcard";
import { Container, Stack, Typography, Grid, Box } from '@mui/material';
import ProductSort from "../../components/Filters/ProductSort";
import ShopFilterSidebar from "../../components/Filters/ProductFilterSideBar";

const Search: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);
  console.log("producto 1", products);
  // const products2 = useAppSelector((state) => state.products.allProducts);
  // console.log("producto 2", products2)
  const dispatch = useAppDispatch();

  useEffect (() => {
  dispatch(productsFetch())
  }, []);

  return (
  <Box sx={{ display: 'flex' }}>
    <ShopFilterSidebar/>
       <Container>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
            <ProductSort/>
            {/* <ShopFilterSidebar/> */}
          </Stack>
        </Stack>
        <Grid container spacing={3} >
        {
          products?.map((p) => (
            <Grid  key={p._id} item xs={12} sm={6} md={3}>
            <ProductCard
            img={p.image}
            price={p.price}
            name={p.name}
            />
          </Grid> 
      ))
    }
    </Grid>
        {/* <ProductCartWidget /> */}
      </Container>
      
  </Box>
  
  );
}

export default Search;