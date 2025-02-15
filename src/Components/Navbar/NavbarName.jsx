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
      }}
    >
      <ScrabblePiece letter="B" height="30px" width="30px" padding=".25rem" fontSize="15x" fontWeight='bold' />

      <Typography
        sx={{
          color: "black",
          whiteSpace: "nowrap",
          fontWeight: "550",
          fontSize: "17px",
        }}
      >
        e-Asia McKerracher
      </Typography>
    </Box>
  );
};

export default NavbarName;
