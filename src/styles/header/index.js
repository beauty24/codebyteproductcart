import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

import { Colors, DrawerWidth } from "../theme";


export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  backgroundColor: "#091625",
  paddingLeft: 20,
  paddingRight: 20,
}));
export const MenuContainer = styled(Box)(() => ({
  display: "flex",
  backgroundColor: "#E6E8E9",
  paddingLeft: 20,
  paddingRight: 20,
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  //fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,

}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const MyListMenu = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",

  alignItems: "flex-start",
  width: "50%",
  margin: 5
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));
