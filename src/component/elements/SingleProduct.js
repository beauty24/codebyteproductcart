import { useState } from "react";
import {
  Product,
  ProductImage,
} from "../../styles/product";
import { Box, Typography, Grid, Button } from "@mui/material";

import { CartState } from "../../context/Context";

export default function SingleProduct({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [showOptions, setShowOptions] = useState(false);
  const handleMouseEnter = () => {
    setShowOptions(true);
    console.log("true");
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
    console.log("false");
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />

        <Typography align={"left"}>{product.name}</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography align={"left"}>${product.price}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Minimun: {product.minimun}</Typography>
          </Grid>
          {showOptions ? (
            cart.some((p) => p.id === product.id) ? (
              "In the cart"
            ) : (
              <Box>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    });
                  }}
                  variant="contained"
                  color="success"
                >
                  Add to Cart
                </Button>
              </Box>
            )
          ) : (
            ""
          )}
        </Grid>
      </Product>
    </>
  );
}
