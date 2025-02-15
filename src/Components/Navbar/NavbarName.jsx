import React from "react";
import { Typography, Box } from "@mui/material";
import ScrabblePiece from "../ScrabblePiece";

const navbarLetterProps = {
  color: "black",
  whiteSpace: "nowrap",
  fontWeight: "550",
  fontSize: "18px",
  paddingTop: "4px",
  paddingLeft: "1.5px",
  paddingRight: "3px",
};

const scrabblePieceProps = {
  height: "33px",
  width: "35px",
  fontSize: "18px",
  fontWeight: "bold",

};


const NavbarName = () => {
  return (
    <Box
    
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        paddingTop: "5px",
        alignItems: "center",
      }}
    >
      <ScrabblePiece letter="B" {...scrabblePieceProps}>
        3
      </ScrabblePiece>
      <Typography sx={navbarLetterProps}>e-</Typography>
      <ScrabblePiece letter="A" {...scrabblePieceProps}>
        1
      </ScrabblePiece>
      <Typography sx={{ ...navbarLetterProps, paddingRight: "23px" }}>
        sia
      </Typography>
      <ScrabblePiece letter="M" {...scrabblePieceProps}>
        3
      </ScrabblePiece>
      <Typography sx={navbarLetterProps}>c</Typography>
      <ScrabblePiece letter="K" {...scrabblePieceProps}>
        5
      </ScrabblePiece>
      <Typography sx={navbarLetterProps}>erracher</Typography>
    </Box>
  );
};

export default NavbarName;
