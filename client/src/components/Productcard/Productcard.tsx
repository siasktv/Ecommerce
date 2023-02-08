import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Card, Link, Typography, Stack } from '@mui/material';

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

interface ProductCardProps {
  img: string;
  price: number;
  name: string;
};

export default function ProductCard({ img, price, name }: ProductCardProps) {
  return (
    <Card variant="outlined">
       <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledProductImg alt={name} src={img} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {price}
            </Typography>
            &nbsp;
            {price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
