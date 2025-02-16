import { AppBar, Toolbar, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import NavbarName from "./NavbarName";

// Define a reusable StyledButton
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "17px",
  color: "black",
  "&:hover": {
    color: theme.palette.primary.main, // Use primary color on hover
  },
}));

const Navbar = () => {
  return (
    <AppBar
      id="home"
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ height: "4rem" }}>
        <NavbarName />
        <Stack
          direction="row"
          spacing={6}
          sx={{
            justifyContent: { xs: "center", md: "flex-end" },
            marginRight: { md: "2rem" },
          }}
        >
          {/* Use StyledButton for all buttons */}
          <StyledButton href="#home">Home</StyledButton>
          <StyledButton href="#about">About</StyledButton>
          <StyledButton href="#skills">Skills</StyledButton>
          <StyledButton href="#projects">Projects</StyledButton>
          <StyledButton href="#contact">Contact</StyledButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
