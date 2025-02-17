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
import CardSectionTitle from "./Components/CardSectionTitle.jsx";


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
        <CardSectionTitle/>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            gap: "1rem",
          }}
        >
          <AboutCardComponent />
          <SkillsCardComponent />
          <ProjectsCardComponent />
        </Box>
        <ContactForm />
      </ThemeProvider>
    </Box>
  );
}

export default App;
