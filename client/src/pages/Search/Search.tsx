import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"; 
import { productsFetch } from "../../features/products/productsSlice";
import ProductCard from "../../components/Productcard/Productcard";
import { Container, Stack, Typography, Grid } from '@mui/material';


const Search: React.FC = () => {
  const products = useAppSelector<[]>((state) => state.products.products);
  console.log(products);
  const dispatch = useAppDispatch();

  useEffect (() => {
  dispatch(productsFetch())
  }, []);

  interface ProductsProps {
    _id: string,
    image: string,
    price: number,
    name: string
  }

  return (
  <>

       <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
          </Stack>
        </Stack>
        <Grid container spacing={3} >
        {
          products?.map((p: ProductsProps) => (
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
  </>
  
  );
}

export default Search;