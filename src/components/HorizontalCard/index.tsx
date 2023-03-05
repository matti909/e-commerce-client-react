import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
//import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppDispatch } from '../../redux/hook';
import { addToCart, removeToCart } from '../../redux/slices/cart.slice';

interface CardHorizntalComponentProps {
  id: string | number;
  image: string;
  price: number;
  name: string;
  info: string;
}

const HorizontalCardComponent: React.FC<CardHorizntalComponentProps> = ({
  id,
  image,
  name,
  price,
  info,
}) => {
  const dispatch = useAppDispatch();

  /*  const handleRemoveToCart = () => {
     dispatch(removeToCart({
       id,
       name: '',
       price: 0,
       image: '',
       info: ''
     }));
   }; */
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        price,
        info: "",
      })
    );
  };

  return (
    <Card sx={{ display: 'flex', my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151, height:200 }}
        image={`http://localhost:1337${image}`}
        alt=""
      />
      <Grid container sx={{ mx: 1 }}> 
        <Grid item xs={9}>
          <Stack>

          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Divider />
            <Typography variant="h6">Precio:${price}</Typography>
          </CardContent>
          </Stack>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="small"
            onClick={handleAddToCart}

          >
            Add to Cart
          </Button>
        </CardActions>
      </Grid>
    </Card>
  );
};
export default HorizontalCardComponent;