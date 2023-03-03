import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppDispatch } from '../../redux/hook';
import { removeToCart } from '../../redux/slices/cart.slice';

interface CardHorizntalComponentProps {
  id: string | number;
  image: string;
  price:number;
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

  const handleRemoveToCart = () => {
    dispatch(removeToCart({
        id,
        name: '',
        price: 0,
        image: '',
        info: ''
    }));
  };
  return (
    <Card sx={{ display: 'flex', my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`http://localhost:1337${image}`}
        alt=""
      />
      <Grid container sx={{ mx: 1 }}>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Divider />
            <Typography variant="h6">{price}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton onClick={handleRemoveToCart}>
              <CloseRoundedIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
export default HorizontalCardComponent;