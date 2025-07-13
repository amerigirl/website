import { AppBar, Toolbar, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import NavbarName from "./NavbarName";
import { HashLink } from "react-router-hash-link";
import StyledButton from "./StyledButton";
import NavbarButtons from "../../Data/NavBarButtons";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ height: "4rem", maxWidth: "95%" }}>
        <NavbarName />
        <Stack
          direction="row"
          spacing={4}
          sx={{
            justifyContent: { xs: "center", md: "flex-end" },
            marginRight: { md: "2rem" },
            marginTop: "1rem",
          }}
        >
          {NavbarButtons.map((button, index) => { 
            <StyledButton
              to={button.link}
              key={index}
              component={button.component}
            >
              {button.name}
            </StyledButton>
          })}
          
          
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
