import { ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/header";
import PersonIcon from "@mui/icons-material/Person";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function Actions({ matches }) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
      <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <PersonIcon /> Sing In
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <ShoppingCartIcon />Carts
          </ListItemIcon>
        </ListItemButton>
      
      </MyList>
    </Component>
  );
}
