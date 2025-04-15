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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
          marginTop: "8rem",
        }}
      >
        {imageList.map((item) => (
          <Box
            key={item.src}
            sx={{
              width: "25%",
              height: "25%",
              overflow: "hidden",
          
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy" //is this needed?
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
    </ThemeProvider>
  );
};

export default SkillsPage;
