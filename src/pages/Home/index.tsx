/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Header } from "../../components";
import { Products } from "../../services/Products";
import axios from "axios";
import { Product } from "../../types/api.types";
import { CardComponent } from "../../components/Card";
import HorizontalCardComponent from "../../components/HorizontalCard";
//import { CardComponent } from "../../components/Card";

// eslint-disable-next-line react-hooks/rules-of-hooks
/* const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:1337/api/products");
    const { data } = res.data;

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}; */
export const Home: React.FC<{}> = () => {
  const [allProducts, setAllProducts] = useState<Product[]>();

  useEffect(() => {
    Products.getAll({ pagination: 1 })
      .then((res) => {
        setAllProducts(res);
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(allProducts);

  return (
    <Container maxWidth="xl">
      <Header
        title="Bodega"
        description="Bienvenido" element={undefined}      />
      <Grid container spacing={2} direction="row">
        {allProducts?.map((el) => (
          <Grid key={el.id} item xs={3}>
            <HorizontalCardComponent
              id={el.id}
              name={el.name}
              price={el.price}
              image={el.image} 
              info={""} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
