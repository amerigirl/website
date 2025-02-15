import React from "react";
import CardComponent from "./CardSection/CardComponent";
import ScrabblePiece from "./ScrabblePiece";
import { Box, CardContent } from "@mui/material";

const scrabbleLetterProps = {
  height: "45px",
  width: "45px",
  padding: ".7rem",
  fontSize: "20px",
  fontWeight: "bold",
};
const ProjectsCardComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CardComponent>
        <CardContent
          sx={{
            display: "flex",
            gap: "3.3rem",
          }}
        >
          <ScrabblePiece letter="P" {...scrabbleLetterProps} />
          <ScrabblePiece letter="O" {...scrabbleLetterProps} />
          <ScrabblePiece letter="E" {...scrabbleLetterProps} />
          <ScrabblePiece letter="T" {...scrabbleLetterProps} />
        </CardContent>

        <CardContent
          sx={{
            display: "flex",
            gap: "3.3rem",
            marginLeft: "3.2rem",
            marginTop: "-4rem",
          }}
        >
          <ScrabblePiece letter="R" {...scrabbleLetterProps} />
          <ScrabblePiece letter="J" {...scrabbleLetterProps} />
          <ScrabblePiece letter="C" {...scrabbleLetterProps} />
          <ScrabblePiece letter="S" {...scrabbleLetterProps} />
        </CardContent>
      </CardComponent>
    </Box>
  );
};

export default ProjectsCardComponent;
