import { ListItemText } from "@mui/material";
import { MenuContainer, MyListMenu } from "../../styles/header";

export default function AppbarDesktop() {
  return (
    <MenuContainer>
      <MyListMenu type="row">
        <ListItemText primary="All products" sx={{ color: "#535C67" }} />
        <ListItemText primary="Packing" sx={{ color: "#535C67" }} />
        <ListItemText primary="Drinkware" sx={{ color: "#535C67" }} />
        <ListItemText primary="Apparel" sx={{ color: "#535C67" }} />
        <ListItemText primary="Notebooks" sx={{ color: "#535C67" }} />
        <ListItemText primary="Backpacks" sx={{ color: "#535C67" }} />
      </MyListMenu>
    </MenuContainer>
  );
}
