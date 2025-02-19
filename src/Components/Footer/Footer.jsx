import React from "react";
import { AppBar, Toolbar, styled, Button, Box, Stack } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: "10rem",
}));
const Footer = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
        <StyledToolbar>
          <Stack>
            <Button>Button</Button>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
