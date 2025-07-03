import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import Footer from "../Footer/Footer";
import GithubCard from "./GithubCard";

const GithubLandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ marginTop: "8rem", textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "primary.main" }}
        >
          Projects and Future Learnings
        </Typography>
      </Box>
      <Box sx={{ mt: 4, textAlign: "center", p: 4 }}>
        <img src="./contributions.png" style={{ borderRadius: "16px" }} />
      </Box>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto 4rem",
          textAlign: "center",
          p: 3,
        }}
      >
        <Typography style={{ fontSize: "1.2rem" }}>
          Projects are how we learn and grow! My Github (like most of ours) is
          littered with projects that I've started and not quite finished, old
          class assignments, and general practice. But inside that Github
          profile is also a few solid, complete jewels that I'd love to share!
        </Typography>
      </Box>
          <Box sx={{display: "flex", flexwrap: "wrap", justifyContent: "space-evenly",  p:3}}>
        <GithubCard />
        <GithubCard />
        <GithubCard />
      </Box>

      <Footer />
    </ThemeProvider>
  );
};

export default GithubLandingPage;
