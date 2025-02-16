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
  height: "35px",
  width: "35px",
  padding: ".7rem",
  fontSize: "19px",
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
              3
            </Box>
          }
        />
      </Box>
      <Typography sx={navbarLetterProps}>e-</Typography>
      <Box>
        <ScrabblePiece
          letter="A"
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
        >
          1
        </ScrabblePiece>
      </Box>

      <Typography sx={{ ...navbarLetterProps, paddingRight: "23px" }}>
        sia
      </Typography>

      <Box>
        <ScrabblePiece
          letter="M"
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
              3
            </Box>
          }
        >
          3
        </ScrabblePiece>
      </Box>

      <Typography sx={navbarLetterProps}>c</Typography>
      <Box>
        <ScrabblePiece
          letter="K"
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
              3
            </Box>
          }
        >
          5
        </ScrabblePiece>
      </Box>

      <Typography sx={navbarLetterProps}>erracher</Typography>
    </Box>
  );
};

export default NavbarName;
