import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { imageList } from "../../Data/AboutImageData";
import SectionTitle from "../SectionTitle";

const SkillsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Box sx={{ marginTop: "10rem" }}>
        <SectionTitle title={"Skills"} subtitle={"My technical level"} />
      </Box>

      {imageList.map((item) => (
        <Box
          key={item.src}
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={`${item.src}?w=220&h=220&fit=crop&auto=format`}
            srcSet={`${item.src}?w=220&h=220&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      ))}
    </ThemeProvider>
  );
};

export default SkillsPage;

