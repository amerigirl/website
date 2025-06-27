import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import Footer from "../Footer/Footer";

 

const GithubLandingPage = () => {
  return (
      <ThemeProvider theme={theme}>
          <Navbar  />
          <Box sx={{ marginTop: "8rem", textAlign: "center"}}>
              <Typography sx={{fontSize: "2.5rem", fontWeight: "bold"}}>
                  Projects and Future Learnings
              </Typography>
          </Box>
          <Box sx={{mt: 4, textAlign: "center", p:4}}>
              <img src="./contributions.png" style={{borderRadius:"16px"}}/>
          </Box>
          <Footer />
    </ThemeProvider>
  );
};

export default GithubLandingPage;
