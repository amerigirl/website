import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box, Typography } from "@mui/material";
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
      <Typography sx={{ textAlign: "center", mt: 8, mb: 10, ml: "18%", mr: "18%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius adipisci, illum voluptatibus nobis a corporis temporibus culpa, modi aliquam pariatur quisquam itaque labore iusto odio voluptas velit eos consectetur.
  </Typography>
      <Box
        sx={{
          mt: 6,
          mb: 6,
          maxWidth: 800,
          mx: "auto",
          backgroundColor: "secondary.main", 
          p: 4, 
          borderRadius: 4, // Rounded corners
          boxShadow: 3, 
        }}
      >
        <Accordion />
      </Box>
    </ThemeProvider>
  );
};

export default SkillsPage;
