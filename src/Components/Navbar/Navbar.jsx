import { AppBar, Toolbar, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import NavbarName from "./NavbarName";
import {Link} from "react-router-dom";

// Define a reusable StyledButton
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "17px",
  color: "black",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));


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
          <StyledButton component={Link} to="/" sx={{ textDecoration: "none" }}>
            Home
          </StyledButton>
          <StyledButton
            component={Link}
            to="/aboutPage"
            sx={{ textDecoration: "none" }}
          >
            About
          </StyledButton>
          <StyledButton
            component={Link}
            to="/skillsPage"
            sx={{ textDecoration: "none" }}
          >
            Skills
          </StyledButton>
          <StyledButton component={Link} to="/projects">
            Projects
          </StyledButton>
          <StyledButton href="#contact">Contact</StyledButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;
