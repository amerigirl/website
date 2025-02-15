import React from "react";
import { Box, CardContent } from "@mui/material";
import CardComponent from "./CardSection/CardComponent";
import ScrabblePiece from "./ScrabblePiece";

const scrabbleLetterProps = {
  height: "50px",
  width: "50px",
  padding: "1rem",
  fontSize: "15px",
  fontWeight: "bold",
};



const AboutCardComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CardComponent>
        <CardContent
          sx={{
            display: "flex",
            gap: "7px",
          }}
        >
          <ScrabblePiece letter="A" {...scrabbleLetterProps} />
          <ScrabblePiece letter="B" {...scrabbleLetterProps} />
          <ScrabblePiece letter="O" {...scrabbleLetterProps} />
          <ScrabblePiece letter="U" {...scrabbleLetterProps} />
          <ScrabblePiece letter="T" {...scrabbleLetterProps} />
        </CardContent>
        
      </CardComponent>
    </Box>
  );
};

export default AboutCardComponent;
