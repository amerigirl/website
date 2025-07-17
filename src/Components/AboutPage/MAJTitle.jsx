import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import About from "./About";
import MyAcademicJourney from "./MyAcademicJourney/Timeline";
import SectionTitle from "../SectionTitle";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

const MAJTitle = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <About />

      <Box>
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

export default MAJTitle;
