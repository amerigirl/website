import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme";

function RootLayout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
