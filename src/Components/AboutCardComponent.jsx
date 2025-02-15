import React from "react";
import { Box, CardContent } from "@mui/material";
import CardComponent from "./CardSection/CardComponent";
import ScrabblePiece from "./ScrabblePiece";

const scrabbleLetterProps = {
  height: "45px",
  width: "45px",
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
            gap: "3.6rem",
          }}
        >
          <ScrabblePiece letter="A" {...scrabbleLetterProps} />
          <ScrabblePiece letter="O" {...scrabbleLetterProps} />
          <ScrabblePiece letter="T" {...scrabbleLetterProps} />
        </CardContent>

        <CardContent
          sx={{
            display: "flex",
            gap: "3.6rem",
            marginLeft: "3.35rem",
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
