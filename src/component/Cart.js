import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  Divider,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { CartState } from "../context/Context";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <Grid container>
        <Grid item xs={8} sx={{ p: 2 }}>
          <Box display="flex">
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              Your cart ({cart.length})
            </Typography>
          </Box>
          <List sx={{ width: "100%" }}>
            {cart.map((prod) => (
              <>
              <ListItem alignItems="flex-start">
                <Avatar
                  alt="Remy Sharp"
                  src={prod.image}
                  sx={{ width: "25%", height: "25%" }}
                />

                <Grid container>
                  <Grid item xs={8}>                 
                    <ListItemText
                      primary={
                        <Typography style={{ fontWeight: 600 }} variant="h5">
                          {prod.name}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Box sx={{ paddingBottom:2, paddingTop:2 }}>

                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Quantity: 
                            </Typography>
                            <Select
                             variant="standard"
                             sx={{                     
                              width: 50,
                              height: 30,
                              paddingLeft:2
                              }}
                              value={prod.qty}
                              label="Age"
                              onChange={(e) =>
                                dispatch({
                                  type: "CHANGE_CART_QTY",
                                  payload: {
                                    id: prod.id,
                                    qty: e.target.value,
                                  },
                                })
                              }
                            >
                              {[...Array(prod.minimun).keys()].map((x) => (
                                <MenuItem value={x + 1}>{x + 1}</MenuItem>
                              ))}
                            </Select>
                          </Box>
                          <Box sx={{ paddingBottom:2, paddingTop:2 }}>
                            {prod.description}
                          </Box>
                          <Box sx={{ paddingBottom:2, paddingTop:2 }}>
                            <Button
             
                              variant="outlined"
                          
                              startIcon={<DeleteIcon />}
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: prod,
                                })
                              }
                            >
                              Remove
                            </Button>
                          </Box>
                        </>
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    container
                    justifyContent="end"
                    sx={{ paddingRight: 2 }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          style={{ fontWeight: 600 }}
                          textAlign="right"
                        >
                          ${prod.price}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          style={{ fontWeight: 600 }}
                          textAlign="right"
                        >
                          Total: ${Number(prod.price) * prod.qty}
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
                
              </ListItem>
              <Divider variant="inset" />
              </>
            ))}
          </List>
        </Grid>
        <Grid item xs={4} sx={{ p: 2 }}>
          <Box display="flex">
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              Order Sumary
            </Typography>
          </Box>
          <Grid container sx={{ paddingBottom: 2 }}>
            <Grid item xs={6}>
              <Typography sx={{ color: "#535C67" }}>
                Number of items{" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              justifyContent="end"
              sx={{ paddingRight: 2 }}
            >
              <Typography sx={{ color: "#535C67" }}> {cart.length} </Typography>
            </Grid>
          </Grid>

          <Divider variant="inset" />

          <Grid container sx={{ paddingBottom: 2 }}>
            <Grid item xs={6}>
              <Typography>Total </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              justifyContent="end"
              sx={{ paddingRight: 2 }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {" "}
                ${total}{" "}
              </Typography>
            </Grid>
          </Grid>

          <Box display="flex" sx={{ paddingBottom: 2 }}>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              style={{ width: "100%" }}
            >
              Proceed to checkout
            </Button>
          </Box>

          <Box display="flex" sx={{ paddingBottom: 2 }}>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              style={{ width: "100%" }}
            >
              Continue shopping
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
