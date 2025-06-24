import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { imageList } from "../../Data/AboutImageData";
import SectionTitle from "../SectionTitle";
import Accordion from "./Accordion";
import Divider from "@mui/material/Divider";

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
          padding: "2rem",
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
      <Divider
        sx={{
          borderColor: "#000",
          borderBottomWidth: 1,
          width: "60%",
          ml: "18%",
          mr: "auto",
        }}
      />
      <Box
        sx={{
          mt: 5,
          maxWidth: 800,
          mx: "auto",
          backgroundColor: "#f5f5f5", 
          p: 4, // Padding (theme spacing, 4 = 32px)
          borderRadius: 3, // Rounded corners (theme spacing, 3 = 24px)
          boxShadow: 2, 
        }}
      >
        <Accordion />
      </Box>
    </ThemeProvider>
  );
};

export default SkillsPage;
