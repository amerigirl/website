import { Box, Typography } from "@mui/material";
import React from "react";

const ScrabblePiece = () => {
  return (
    //1. create a small box
    //2. add the right background--where is it? wood,
    //   -raising the sides/css, maybe outline in black
    //3. create the letter and move it to the center of the box

    //4. create a sub number and move it to the bottom right of the box

    <Box
      sx={{
        height: "60px",
        width: "60px",
        backgroundColor: "secondary.main",
        border: "2px solid black",
        boxShadow: "0,0,0,.3",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          padding: ".7rem",
          fontSize: "1.6rem",
        }}
      >
        S
      </Typography>
    </Box>
  );


};

export default ScrabblePiece;
