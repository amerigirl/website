import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import Footer from "../Footer/Footer";
import GithubCard from "./GithubCard";
import GithubData from "../../Data/GithubData";

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
        <img
          src="./contributions.png"
          alt="github calendar"
          style={{ borderRadius: "16px" }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "right", marginRight:"12rem", marginTop:"-1rem" }}>
        <a
          href="https://github.com/amerigirl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            sx={{
              height: 45,
              width: 45,
            }}
            alt="Github Icon"
            src="../../github.png"
          />
        </a>
      </Box>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto 4rem",
          textAlign: "center", 
          mt: 3
        }}
      >
        <Typography style={{ fontSize: "1.2rem" }}>
          Projects are how we learn and grow! My Github (like most of ours) is
          littered with projects that I've started and not quite finished, old
          class assignments, and general practice. But inside that Github
          profile is also a few solid, complete jewels that I'd love to share!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          p: 3,
        }}
      >
        {GithubData.map((data, index) => {
          console.log(data);
          return <GithubCard key={index} info={data} />;
        })}
      </Box>

      <Footer />
    </ThemeProvider>
  );
};

export default GithubLandingPage;
