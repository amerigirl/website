import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingSection from "./Components/LandingSection.jsx";
import { amber, blue } from "@mui/material/colors";
import { Box } from "@mui/material";
import SkillsCardComponent from "./Components/CardSection/Cards/SkillsCardComponent.jsx";
import AboutCardComponent from "./Components/CardSection/Cards/AboutCardComponent.jsx";
import ProjectsCardComponent from "./Components/CardSection/Cards/ProjectsCardComponent.jsx";
import SectionTitle from "./Components/SectionTitle.jsx";
import ContactComponent from "./Components/ContactForm/ContactComponent.jsx";
import Footer from "./Components/Footer/Footer.jsx";

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
          title="Learn More..."
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
        <ContactComponent />
        <Footer/>
      </ThemeProvider>
    </Box>
  );
}

export default App;
