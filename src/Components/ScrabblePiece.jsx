import { Box, Typography } from "@mui/material";
import React from "react";

const ScrabblePiece = ({
  letter,
  height,
  width,
  fontSize,
  padding,
  fontWeight,
}) => {
  return (
    <Box
      sx={{
        height,
        width,
        backgroundColor: "secondary.main",
        border: "2px solid black",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
          fontSize,
          padding,
          fontWeight
        }}
      >
        {letter}
      </Typography>
    </Box>
  );
};

export default ScrabblePiece;
