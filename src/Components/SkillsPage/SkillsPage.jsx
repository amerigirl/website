import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Container, Typography, Box } from "@mui/material";

const SkillsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginTop: "10rem",
        }}
      >
        <Box>
          <img
            src="../../../frontEndWork.jpg"
            alt="frontend work"
            style={{
              height: "40vh",
              outline: "3px solid black", 
              borderRadius: "15px"
            }}
          />
        </Box>
        <Box>
          <Typography>
            Most days, you will find me right here at my desk, tinkering with a project, reading technical docs, or reviewing 
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SkillsPage;
