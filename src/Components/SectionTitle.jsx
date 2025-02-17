import { Typography } from "@mui/material";
import MouseSharpIcon from "@mui/icons-material/MouseTwoTone";
import React from "react";

const SectionTitle = ({title, subtitle}) => {
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        id="about"
        sx={{
          textAlign: "center",
          paddingBottom: "1rem",
          color: "primary.main",
          fontSize: "3rem",
          marginTop: "9rem",
          fontWeight: "bold",
        }}
      >
    {title}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          paddingBottom: "4rem",
        }}
      >{subtitle}
      </Typography>
    </>
  );
};

export default SectionTitle;
