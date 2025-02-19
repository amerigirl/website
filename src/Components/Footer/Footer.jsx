import React from "react";
import { AppBar, Toolbar, Stack, Button, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
        <Button>Button</Button>
      </AppBar>
    </Box>
  );
};

export default Footer;
