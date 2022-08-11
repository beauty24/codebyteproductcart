import {
    Divider,
    ListItemButton,
    ListItemIcon,
  } from "@mui/material";
  import {
    AppbarContainer,
    AppbarHeader,
    MyList,
  } from "../../styles/header";
  import SearchIcon from "@mui/icons-material/Search";
  import Actions from "./actions";

  
  export default function Headerbar() {
    
    return (
      <AppbarContainer>
        <AppbarHeader variant="h4">Code Byte</AppbarHeader>
        <MyList type="row">
        
          <ListItemButton sx={{
            ":active": {
              color:"#fff"
            },
        "&.Mui-selected": {
          backgroundColor: "#fff"
        },
        "&.Mui-focusVisible": {
          backgroundColor: "#fff"
        },
        ":hover": {
          backgroundColor: "#fff"
        },
        
      }} >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
            </MyList>
         <Actions />   
      </AppbarContainer>
    );
  }