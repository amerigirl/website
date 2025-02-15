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

const scrabbleNumberProps = {
  position: "absolute",
  bottom: 13.5,
  marginLeft: "25px",
  fontSize: "9px",
  lineHeight: 1,
  color: "black",
};
const AboutCardComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CardComponent>
        <CardContent
          id="about"
          sx={{
            display: "flex",
            gap: "3.6rem",
          }}
        >
          <ScrabblePiece letter="A" {...scrabbleLetterProps}>
            <Box
              sx={{
                position: "absolute",
                marginLeft: "2px",
                fontSize: "9px",
                marginTop: "13.9rem",
                color: "black",
              }}
            >
              1
            </Box>
          </ScrabblePiece>
          <ScrabblePiece letter="O" {...scrabbleLetterProps}>
            <Box
              sx={{
                position: "absolute",
                fontSize: "9px",
                marginTop: "13.85rem",
                color: "black",
              }}
            >
              1
            </Box>
          </ScrabblePiece>
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
          <ScrabblePiece letter="B" {...scrabbleLetterProps}>
            <Box
              sx={{
                position: "absolute",
                marginLeft: ".2rem",
                fontSize: "9px",
                marginTop: "14.9rem",
                color: "black",
              }}
            >
              3
            </Box>
          </ScrabblePiece>
          <ScrabblePiece letter="U" {...scrabbleLetterProps}>
            <Box
              sx={{
                position: "absolute",
                fontSize: "9px",
                marginTop: "13.85rem",
                color: "black",
              }}
            >
              1
            </Box>
          </ScrabblePiece>
        </CardContent>
      </CardComponent>
    </Box>
  );
};

export default AboutCardComponent;
