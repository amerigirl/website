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
    <CardComponent>
        <CardContent
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: 'wrap',
        gap: ".3rem",
        padding: "1rem",
      }}
    >
      <Box>
        <Box>
          <ScrabblePiece
            letter="J"
            {...scrabbleLetterProps}
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
                8
              </Box>
            }
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: "1.3rem" }}>
        <ScrabblePiece
          letter="E"
          {...scrabbleLetterProps}
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
      <Box>
        <ScrabblePiece
          letter="C"
          {...scrabbleLetterProps}
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

      <Box sx={{ marginTop: "1.3rem" }}>
        <ScrabblePiece
          letter="T"
          {...scrabbleLetterProps}
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
      <Box>
        <ScrabblePiece
          letter="S"
          {...scrabbleLetterProps}
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
      
    </CardContent>
    </CardComponent>
  
  );
};

export default ProjectsCardComponent;
