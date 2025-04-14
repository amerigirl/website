import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
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
          maxWidth: "100%", // Ensure the box doesn't exceed the viewport width
          padding: "1rem",
          boxSizing: "border-box", // Include padding in width calculation
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Auto-adjust columns
            gap: ".5rem",
            backgroundColor: "#d6e3e7",
            margin: "2rem 3rem 0 3rem",
            padding: ".3rem 0 ",
          }}
        >
          <img
            style={{ width: "100%", maxWidth: "100%", height: "auto" }}
            src="../../../learn.jpg"
            alt="learning"
          />
          <img
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            src="../../../frontEndWork.jpg"
            alt="frontend Work"
          />
          <img
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            src="../../../studyPlan.png"
            alt="studyplan slide"
          />
          <img
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            src="../../../theModal.jpg"
            alt="the modal pic"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SkillsPage;

// <Container
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: "2rem",
//         marginTop: "10rem",
//       }}
//     >
//       <Box>
//         <img
//           src="../../../frontEndWork.jpg"
//           alt="frontend work"
//           style={{
//             height: "30vh",
//             outline: "3px solid black",
//             borderRadius: "15px",
//           }}
//         />
//       </Box>
//       <Box>
//         <Typography
//           sx={{
//             fontSize: "20px",
//           }}
//         >
//           Most days, you will find me right here at my desk, tinkering with a project, reading technical docs, or watching a youtube video about a React. Most days, you will find me right here at my desk, tinkering with a project, reading technical docs, or watching a youtube video about a React.Most days, you will find me right here at my desk, tinkering with a project, reading technical docs, or watching a youtube video about a React.Most days, you will find me right here at my desk, tinkering with a project, reading technical docs, or watching a youtube video about a React.
//         </Typography>
//       </Box>
//     </Container>
