import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import AboutCardComponent from "./CardSection/Cards/AboutCardComponent";
import SkillsCardComponent from "./CardSection/Cards/SkillsCardComponent";
import ProjectsCardComponent from "./CardSection/Cards/ProjectsCardComponent";
import LandingSection from "./LandingSection";
import ContactComponent from "./ContactForm/ContactComponent";
import SectionTitle from "./SectionTitle";
import theme from "../theme";

function HomeLayout() {
  return (
    <ThemeProvider theme={theme}>
      <LandingSection />
      <SectionTitle
        title={"How can I help?"}
        subtitle="(Click a card to learn more)"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: ".5rem",
        }}
      >
        <AboutCardComponent />
        <SkillsCardComponent />
        <ProjectsCardComponent />
      </Box>
      <ContactComponent />
    </ThemeProvider>
  );
}

export default HomeLayout;
