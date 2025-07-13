import React from "react";
import { Typography, Box } from "@mui/material";
import ScrabblePiece from "../ScrabblePiece";

// defines the properties for the Typography component used in the NavbarName
const navbarLetterProps = {
  color: "black",
  whiteSpace: "nowrap",
  fontWeight: "550",
  fontSize: "20px",
  paddingTop: "4px",
  paddingLeft: "1.5px",
  paddingRight: "3px",
};

// defines the properties for the ScrabblePiece component used in the NavbarName
const scrabblePieceProps = {
  height: "31px",
  width: "31px",
  padding: ".7rem",
  fontSize: "20px",
  fontWeight: "bold",
};

const NavbarName = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        paddingTop: ".5rem",
        alignItems: "center",
        marginLeft: ".6rem",
      }}
    >
      <Box>
        
        <ScrabblePiece
          letter="B"
          {...scrabblePieceProps}
          numberBox={
            <Box
              sx={{
                position: "absolute",
                right: 5,
                bottom: 3,
                fontSize: "9px",
                color: "black",
              }}
            >
              1
            </Box>
          }
        />
      </Box>
      <Typography sx={navbarLetterProps}>e-</Typography>
      <Typography sx={{ ...navbarLetterProps, paddingRight: "1rem" }}>
        Asia
      </Typography>

      <Box>
        <ScrabblePiece
          letter="M"
          {...scrabblePieceProps}
          numberBox={
            <Box
              sx={{
                position: "absolute",
                right: 3.9,
                bottom: 3,
                fontSize: "9px",
                color: "black",
              }}
            >
              3
            </Box>
          }
        ></ScrabblePiece>
      </Box>

      <Typography sx={navbarLetterProps}>cKerracher</Typography>
    </Box>
  );
};

export default NavbarName;
