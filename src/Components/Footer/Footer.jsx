import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Button,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: "10rem",
}));
const Footer = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
        <StyledToolbar>
          <Box>
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
              Be-Asia McKerracher
            </Typography>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
