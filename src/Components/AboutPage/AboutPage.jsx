import React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import BeasiaName from "./BeasiaName";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box>
        <BeasiaName />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
