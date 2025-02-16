import React from "react";
import { Box, Typography } from "@mui/material";

const ScrabblePiece = ({
  letter,
  height,
  width,
  fontSize,
  fontWeight,
  numberBox,
}) => {
  return (
    <Box sx={{ position: "relative" }}>
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
            color: "black",
            fontSize,
            fontWeight,
          }}
        >
          {letter}
        </Typography>
      </Box>
      {numberBox}
    </Box>
  );
};

export default ScrabblePiece;
