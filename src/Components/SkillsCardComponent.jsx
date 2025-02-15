import React from "react";
import CardComponent from "./CardSection/CardComponent";
import { Box, CardContent } from "@mui/material";
import ScrabblePiece from "../Components/ScrabblePiece";

const scrabbleLetterProps = {
  height: "45px",
  width: "45px",
  padding: ".7rem",
  fontSize: "20px",
  fontWeight: "bold",
};
const SkillsCardComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CardComponent>
        <CardContent
          sx={{
            display:"flex",
            gap: "3.5rem",
          }}
        >
          <ScrabblePiece letter="S" {...scrabbleLetterProps} />
          <ScrabblePiece letter="I" {...scrabbleLetterProps} />
          <ScrabblePiece letter="L" {...scrabbleLetterProps} />
        </CardContent>

        <CardContent
          sx={{
            display: "flex",
            gap: "3.5rem",
            marginLeft: "3.3rem",
            marginTop: "-4rem",
          }}
        >
          <ScrabblePiece letter="K" {...scrabbleLetterProps} />
          <ScrabblePiece letter="L" {...scrabbleLetterProps} />
          <ScrabblePiece letter="S" {...scrabbleLetterProps} />
        </CardContent>
      </CardComponent>
    </Box>
  );
};

export default SkillsCardComponent;
