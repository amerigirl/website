import React from "react";
import { Typography, Box } from "@mui/material";
import ScrabblePiece from "../CardSection/ScrabblePiece";

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
  height: "25px",
  width: "25px",
  padding: ".20rem",
  fontSize: "15px",
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
      <ScrabblePiece letter="B" {...scrabblePieceProps} />
      <Typography sx={navbarLetterProps}>e-</Typography>
      <ScrabblePiece letter="A" {...scrabblePieceProps} />
      <Typography sx={{ ...navbarLetterProps, paddingRight: "23px" }}>
        sia
      </Typography>
      <ScrabblePiece letter="M" {...scrabblePieceProps} />
      <Typography sx={navbarLetterProps}>c</Typography>
      <ScrabblePiece letter="K" {...scrabblePieceProps} />
      <Typography sx={navbarLetterProps}>erracher</Typography>
    </Box>
  );
};

export default NavbarName;
