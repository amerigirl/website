import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { imageList } from "../../Data/AboutImageData";
import SectionTitle from "../SectionTitle";
import Accordion from "./Accordion";

const SkillsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Box sx={{ marginTop: "8rem" }}>
        <SectionTitle title={"Skills"} subtitle={"My technical level"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          padding: "3rem",
          marginTop: "3rem",
        }}
      >
        {imageList.map((item) => (
          <Box
            key={item.src}
            sx={{
              width: "23%",
              height: "25%",
              overflow: "hidden",
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              style={{
                width: "85%",
                height: "85%",
                objectFit: "cover",
                borderRadius: "15px",
                border: "1px solid #000",
              }}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: "3rem", padding: "0 8rem" }}>
        <Accordion />
      </Box>
    </ThemeProvider>
  );
};

export default SkillsPage;
