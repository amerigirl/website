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
        height: "50px",
        width: "50px",
        backgroundColor: "secondary.main",
        border: "2px solid black",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          padding: ".6rem",
          fontSize: "1.3rem"
        }}
      >
        S
      </Typography>
    </Box>
  );


};

export default ScrabblePiece;
