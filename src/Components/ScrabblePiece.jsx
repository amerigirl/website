import { Box, Typography } from "@mui/material";
import React from "react";

const ScrabblePiece = () => {
  return (
    //1. create a small box
    //2. add the right background--where is it? wood, grainy
    //   -raising the sides/css, maybe outline in black

    <Box sx={{
        height: '70px',
        width: '70px',
        backgroundColor: 'pink', 
     

    }}>
      <Typography sx={{
        textAlign: 'center',
        padding: '1.5rem'

      }}>S</Typography>
    </Box>
  );

  //3. create the letter and move it to the center of the box

  //4. create a sub number and move it to the bottom right of the box
};

export default ScrabblePiece;
