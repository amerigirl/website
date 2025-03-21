import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SkillsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
   
    </ThemeProvider>
  );
};

export default SkillsPage;
