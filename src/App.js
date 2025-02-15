import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutMe from "./Components/AboutMe";
import SkillsCard from "./Components/CardSection/CardComponent";
import { amber, blue, indigo } from "@mui/material/colors";
import CardComponent from "./Components/CardSection/CardComponent";
import { Box } from "@mui/material";

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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Adjust this value as needed
        },
      },
    },
  },
});
function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AboutMe />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "stretch",
            flexWrap: "wrap",
            width: "100%",
            padding: "16px",
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
