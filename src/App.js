import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import AboutMe from "./Components/AboutMe";


const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[50],
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
    <ThemeProvider theme={theme}>
      <Navbar />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
