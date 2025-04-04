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
          display: "flex",
          justifyContent: "center",
          height: "35vh",
          gap: "1rem",
          backgroundColor: "rgb(197, 244, 244)",
          margin: "0 3rem 0 3rem",
          padding: "1rem",
          outline: "1px solid black",
          width: "81%",
        }}
      >
        <img src="../../../learn.jpg" alt="learning" />
        <img src="../../../frontEndWork.jpg" alt="frontend Work" />
        <img width={400} src="../../../studyPlan.png" alt="studyplan slide" />
        <img src="../../../theModal.jpg" alt="the modal pic" />
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
