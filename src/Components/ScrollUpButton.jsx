import React from "react";
import { Button, Typography } from "@mui/material";

const ScrollUpButton = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button variant="contained" id="home" onClick={handleClick}>
      <Typography>Scroll up</Typography>
    </Button>
  );
};

export default ScrollUpButton;
