import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import Footer from "../Footer/Footer";

 

const GithubLandingPage = () => {
  return (
      <ThemeProvider theme={theme}>
          <Navbar  />
          <Box sx={{ marginTop: "8rem", textAlign: "center" }}>
              <Typography>
                  Projects and Future Learnings
              </Typography>
          </Box>
          <Box sx={{mt: 4, textAlign: "center"}}>
              <img src="./contributions.png"/>
          </Box>
          <Footer />
    </ThemeProvider>
  );
};

export default GithubLandingPage;
