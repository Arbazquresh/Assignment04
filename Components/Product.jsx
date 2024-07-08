import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Grid,
  Rating,
  TextField,
} from "@mui/material";

export const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <TextField
          sx={{ marginTop: 12 }}
          variant="outlined"
          label="Search Here...."
          fullWidth
        />
      </Grid>
      <Grid item xs={4}></Grid>
      {data.map((item) => (
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Badge badgeContent={item.price} color="warning">
                <img
                  src={item.image}
                  height={"200px"}
                  width={"150px"}
                  align="center"
                  alt=""
                />
              </Badge>
              <h3>{item.title.slice(0, 20)}</h3>
              <h4>{item.category}</h4>
              <p>{item.description.slice(0, 60)}</p>
              <h6>
                <Rating value={item.rating.rate} />
              </h6>
              <Button variant="contained" color="success">
                Add To Cart
              </Button>
              <Button
                sx={{ marginLeft: 5 }}
                variant="contained"
                color="success"
              >
                Buy
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
