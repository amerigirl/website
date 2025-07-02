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
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: "10rem",
}));
const Footer = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
        <StyledToolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
              Be-Asia McKerracher
            </Typography>
          </Box>

          <Box>
            <Box>
              <ArrowUpwardIcon style={{ fontSize: "2rem" }} />
            </Box>
            <Box
              sx={{
                color: "white",
              }}
            >
              <Button
                id="home"
                color="inherit"
                onClick={ ()=> window.scrollTo({top: 0, behavior: 'smooth'})}
                sx={{
                  minWidth: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  justifyContent: "center",
                }}
              >
                Home
              </Button>
            </Box>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
