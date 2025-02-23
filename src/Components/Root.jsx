import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import theme from "../theme";

function Root() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{ marginTop: "6rem" }}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default Root;
