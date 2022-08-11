
import "./App.css";
import { Container, Stack } from "@mui/material";


import Header from "./component/Header";
import Footer from "./component/Footer";
import Products from "./component/Products";

import { CartState } from "./context/Context";
import Cart from "./component/Cart";

function App() {
  const {
    state: { products },
  } = CartState();
  return (

      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <Header />
          <Cart />
          <Products products={products} />
          <Footer />
        </Stack>
      </Container>

  );
}

export default App;
