import React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import About from "./About";
import MyAcademicJourney from "./MyAcademicJourney/MyAcademicJourney";
import SectionTitle from "../SectionTitle";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <About />

      <Box sx={{ marginTop: "17rem", marginBottom: "10rem" }}>
        <SectionTitle
          title={"My Academic Journey"}
          subtitle={
            <>
              Click the text below to learn more :)
              <MouseOutlinedIcon
                sx={{
                  fontSize: "2.5rem",
                  verticalAlign: "middle",
                  color: "#0dac1b",
                  paddingLeft: ".5rem",
                }}
              />
            </>
          }
        />
      </Box>
      <MyAcademicJourney />
    </ThemeProvider>
  );
};

export default AboutPage;
