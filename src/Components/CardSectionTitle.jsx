import { Typography } from "@mui/material";
import MouseSharpIcon from "@mui/icons-material/MouseTwoTone";
import React from "react";

const CardSectionTitle = () => {
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        sx={{
          textAlign: "center",
          paddingBottom: "1rem",
          color: "primary.main",
          fontSize: "3rem",
          marginTop: "-3rem",
          fontWeight: "bold",
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          paddingBottom: "6rem",
        }}
      >
        Please click a card below to learn how my skills can help your team!
      </Typography>
    </>
  );
};

export default CardSectionTitle;
