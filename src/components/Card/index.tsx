import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../types/api.types";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addToCart } from "../../redux/slices/cart.slice";
import { setItems } from "../../utils/localStorage";

 const CardComponent: React.FC<Product> = ({
  id,
  name,
  image,
  price,
}) => {
  const [disableBtn, setDisableBtn] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const itemExist = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    setDisableBtn(itemExist.some((item) => item.name === name));
    setItems('cart', itemExist);
  }, [itemExist, name]);

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
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={`http://localhost:1337${image}`}
        alt="n/n"
      />
      <CardContent>
        <Typography>name:{name}</Typography>
        <Typography>price:{price}</Typography>
      </CardContent>
      <CardActions>
        
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={handleAddToCart}
          disabled={disableBtn}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent