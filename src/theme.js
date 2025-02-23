import { createTheme } from "@mui/material/styles";
import { amber, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
    },
    secondary: {
      main: amber[200],
    },
    tertiary: {
      main: teal[50],
    },
  },
});

export default theme;
