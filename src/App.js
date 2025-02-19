import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingSection from "./Components/LandingSection.jsx";
import { amber, blue } from "@mui/material/colors";
import { Box } from "@mui/material";
import SkillsCardComponent from "./Components/CardSection/Cards/SkillsCardComponent.jsx";
import AboutCardComponent from "./Components/CardSection/Cards/AboutCardComponent.jsx";
import ProjectsCardComponent from "./Components/CardSection/Cards/ProjectsCardComponent.jsx";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import SectionTitle from "./Components/SectionTitle.jsx";
import NavArrowUp from "./Components/CardSection/NavArrows/NavArrowUp.jsx";
import NavArrowDown from "./Components/CardSection/NavArrows/NavArrowDown.jsx";
import ContactComponent from "./Components/ContactForm/ContactComponent.jsx";
import NavArrowComponent from "./Components/CardSection/NavArrows/NavArrowComponent.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
    },
    secondary: {
      main: amber[200],
    },
    tertiary: {
      main: blue[50],
    },
  },
});
function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        <LandingSection />
        <SectionTitle
          title="About Me"
          subtitle="Click a card to learn about how my skills can help your team!
"
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
        <NavArrowComponent />
        <ContactComponent />
      </ThemeProvider>
    </Box>
  );
}

export default App;
