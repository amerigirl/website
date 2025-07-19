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

      <Box sx={{ marginTop: "6rem" }}>
        <SectionTitle title={"Skills"} subtitle={"My technical level"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
          marginTop: "2rem",
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
      {/* <Divider
        sx={{
          borderColor: "#000",
          borderBottomWidth: 1,
          width: "60%",
          ml: "18%",
          mr: "auto",
        }}
      /> */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 6,
          mb: 12,
          ml: "18%",
          mr: "19%",
          fontSize: "20px",
        }}
      >
        Once you get to know me, you&apos;ll see a couple of trends. First, I
        like to learn. It&apos;s the only way to grow as an engineer—and a
        person. Second, I like to help others grow and learn as well☺️.
        Here&apos;s a snapshot of my current skill level and the technologies I
        work with.
      </Typography>
      <Box
        sx={{
          mt: 6,
          mb: 10,
          maxWidth: 900,
          mx: "auto",
          backgroundColor: "primary.light",
          p: 1,
          borderRadius: 2, // Rounded corners
          boxShadow: 3,
        }}
      >
        <Accordion />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default SkillsPage;
