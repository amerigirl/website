import { AppBar, Toolbar, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ height: "4rem" }}>
        <Box sx={{flexGrow: 1}}>
          <Typography sx={{ color: "black", whiteSpace: 'nowrap', fontWeight: '550', fontSize: '17px'}}>Be-Asia McKerracher</Typography>
        </Box>
        <Stack
          direction="row"
          spacing={6}
          sx={{ justifyContent: { xs: "center", md: "flex-end" }, marginRight: {md: "2rem"}}}
        >
          {/* Use StyledButton for all buttons */}
          <StyledButton href="#home">Home</StyledButton>
          <StyledButton>About</StyledButton>
          <StyledButton>Skills</StyledButton>
          <StyledButton>Resume</StyledButton>
          <StyledButton>Contact</StyledButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
