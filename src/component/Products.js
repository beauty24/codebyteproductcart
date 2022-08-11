import { Box, Grid, Typography } from "@mui/material";

import SingleProduct from "./elements/SingleProduct";


export default function Products({products}) {

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      alignItems="center"
    >
      <SingleProduct product={product} />
    </Grid>
  ));
  return (
    <>
      <Box display="flex" sx={{ p: 2 }}>
        <Typography variant="h5">You might also like </Typography>
      </Box>
      <Box display="flex" sx={{ p: 2 }}>       
          {renderProducts}       
        </Box>
    </>
  );
}
