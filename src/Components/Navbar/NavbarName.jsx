import React from "react";
import { Typography, Box } from "@mui/material";
import ScrabblePiece from "../CardSection/ScrabblePiece";

const NavbarName = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        direction: "row",
        paddingTop: '5px'
      }}
    >
      <ScrabblePiece
        letter="B"
        height="25px"
        width="25px"
        padding=".20rem"
        fontSize="15x"
        fontWeight="bold"
      />

      <Typography
        sx={{
          color: "black",
          whiteSpace: "nowrap",
          fontWeight: "550",
          fontSize: "18px",
          paddingTop: "4px",
          paddingLeft: "1.5px",
          paddingRight: "3px",
        }}
      >
        e-
      </Typography>
      <ScrabblePiece
        letter="A"
        height="25px"
        width="25px"
        padding=".20rem"
        fontSize="15x"
        fontWeight="bold"
      />
      <Typography
        sx={{
          color: "black",
          whiteSpace: "nowrap",
          fontWeight: "550",
          fontSize: "18px",
          paddingTop: "4px",
          paddingLeft: "1.5px",
          paddingRight: "23px",
        }}
      >
        sia
      </Typography>
      <ScrabblePiece
        letter="M"
        height="25px"
        width="25px"
        padding=".20rem"
        fontSize="15x"
        fontWeight="bold"
      />
      <Typography
        sx={{
          color: "black",
          whiteSpace: "nowrap",
          fontWeight: "550",
          fontSize: "18px",
          paddingTop: "4px",
          paddingLeft: "1.5px",
          paddingRight: "3px",
        }}
      >
        c
      </Typography>
      <ScrabblePiece
        letter="K"
        height="25px"
        width="25px"
        padding=".20rem"
        fontSize="15x"
        fontWeight="bold"
      />
      <Typography
        sx={{
          color: "black",
          whiteSpace: "nowrap",
          fontWeight: "550",
          fontSize: "18px",
          paddingTop: "4px",
          paddingLeft: "1.5px",
          paddingRight: "3px",
        }}
      >
        erracher
      </Typography>
    </Box>
  );
};

export default NavbarName;
