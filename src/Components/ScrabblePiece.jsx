import { Box, Typography } from "@mui/material";
import React from "react";

const ScrabblePiece = ({
  letter,
  height,
  width,
  fontSize,
  padding,
  fontWeight,
  children, 
  numberBox
}) => {
  return (
    <Box
      sx={{
        height,
        width,
        backgroundColor: "secondary.main",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
          fontSize,
          padding,
          fontWeight,
          marginTop: "5px",
        }}
      >
        {letter}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: 13.5,
          marginLeft: "25px",
          fontSize: "9px",
          lineHeight: 1,
          color: "black",
          ...numberBox
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ScrabblePiece;
