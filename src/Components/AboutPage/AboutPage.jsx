import React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import About from "./About";
import MyAcademicJourney from "./MyAcademicJourney/MyAcademicJourney";
import SectionTitle from "../SectionTitle";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <About />

      <Box sx={{ marginTop: "15rem" , marginBottom:"3rem"}}>
        <SectionTitle title={"My Academic Journey"} subtitle={"Click to learn more"} />
      </Box>
      <MyAcademicJourney />
    </ThemeProvider>
  );
};

export default AboutPage;
