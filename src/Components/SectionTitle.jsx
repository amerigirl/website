import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({title, subtitle}) => {
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
          marginTop: "1rem",
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
          paddingBottom: "2rem",
        }}
      >{subtitle}
      </Typography>
    </>
  );
};

export default SectionTitle;
