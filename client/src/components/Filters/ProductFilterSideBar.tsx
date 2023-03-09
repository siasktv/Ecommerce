import PropTypes from 'prop-types'
import { useState } from 'react'
// @mui
import {
  Box,
  Radio,
  Stack,
  Button,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  Typography,
  RadioGroup,
  FormControlLabel,
  Card,
} from '@mui/material'
import {
  selectBrand,
  unselectBrand,
  selectedRatings,
  unselectedRatings,
  clearFilter,
  selectCategory,
} from '../../features/products/productsSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
// components
// import Iconify from '../../../components/iconify';
// import Scrollbar from '../../../components/scrollbar';
// import { ColorMultiPicker } from '../../../components/color-utils';

// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
]
export const FILTER_BRAND_OPTIONS = ['Apple', 'Logitech', 'Canon']
export const FILTER_CATEGORY_OPTIONS = [
  'All',
  'Computer',
  'Mouse',
  'Headphones',
  'Phone',
  'Camera',
]
export const FILTER_RATING_OPTIONS = [5, 4, 3, 2, 1]

// ----------------------------------------------------------------------

ShopFilterSidebar.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
}

const drawerWidth = 240

export default function ShopFilterSidebar() {
  const dispatch = useAppDispatch()

  const brands = useAppSelector((state) => state.products.selectedBrands)

  const categories = useAppSelector(
    (state) => state.products.selectedCategories
  )

  const ratings = useAppSelector((state) => state.products.selectedRating)

  const handleBrandToggle = (brand: string) => {
    const brandToToggle = brand.toLowerCase()
    if (brands.includes(brandToToggle)) {
      dispatch(unselectBrand(brandToToggle))
    } else {
      dispatch(selectBrand(brandToToggle))
    }
  }

  const toggleCategory = (category: string) => {
    const categoryToToggle = category.toLowerCase()
    dispatch(selectCategory(categoryToToggle))
  }

  const toggleRating = (rating: number) => {
    if (ratings.includes(rating)) {
      dispatch(unselectedRatings(rating))
    } else {
      dispatch(selectedRatings(rating))
    }
  }

  const handleClearFilters = () => {
    window.location.reload()
    // dispatch(clearFilter())
  }

  return (
    <>
      <Box
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'none',
          },
        }}
        //   variant="permanent"
        //   anchor="left"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filters
          </Typography>
        </Stack>
        <Divider />

        <Stack spacing={3} sx={{ p: 3 }}>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Brands
            </Typography>
            <FormGroup>
              {FILTER_BRAND_OPTIONS.map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox />}
                  label={item}
                  onChange={() => handleBrandToggle(item)}
                />
              ))}
            </FormGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Category
            </Typography>
            <RadioGroup>
              {FILTER_CATEGORY_OPTIONS.map((item) => (
                <FormControlLabel
                  key={item}
                  value={item}
                  control={<Radio />}
                  label={item}
                  onClick={() => toggleCategory(item)}
                />
              ))}
            </RadioGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Rating
            </Typography>
            <FormGroup>
              {FILTER_RATING_OPTIONS.map((item, index) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox />}
                  label={<Rating readOnly value={5 - index} />}
                  onChange={() => toggleRating(item)}
                />
              ))}
            </FormGroup>
          </div>
        </Stack>
        <Divider />
        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="medium"
            type="submit"
            color="inherit"
            variant="outlined"
            onClick={() => handleClearFilters()}
          >
            Clear All
          </Button>
        </Box>
      </Box>
    </>
  )
}
function selectedRating(rating: number): any {
  throw new Error('Function not implemented.')
}
