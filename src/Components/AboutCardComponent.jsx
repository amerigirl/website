import React from "react";
import { Box, CardContent } from "@mui/material";
import CardComponent from "./CardSection/CardComponent";
import ScrabblePiece from "./ScrabblePiece";

const scrabbleLetterProps = {
  height: "50px",
  width: "50px",
  padding: ".7rem",
  fontSize: "20px",
  fontWeight: "bold",
};

const AboutCardComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CardComponent>
        <CardContent
          sx={{
            display: "flex",
            gap: "4.5rem",
          }}
        >
          <ScrabblePiece letter="A" {...scrabbleLetterProps} />
          <ScrabblePiece letter="O" {...scrabbleLetterProps} />
          <ScrabblePiece letter="T" {...scrabbleLetterProps} />
        </CardContent>

        <CardContent
          sx={{
            display: "flex",
            gap: "4.5rem",
            marginLeft: "4rem",
            marginTop: "-4rem",
          }}
        >
          <ScrabblePiece letter="B" {...scrabbleLetterProps} />
          <ScrabblePiece letter="U" {...scrabbleLetterProps} />
        </CardContent>
      </CardComponent>
    </Box>
  );
};

export default AboutCardComponent;
