import React from "react";
import CardComponent from "../CardComponent";
import ScrabblePiece from "../../ScrabblePiece";
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
          flexWrap: "wrap",
          gap: ".3rem",
          padding: "1rem",
        }}
      >
        <Box>
          <Box>
            <ScrabblePiece
              letter="G"
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
                  2
                </Box>
              }
            />
          </Box>
        </Box>

        <Box sx={{ marginTop: "1.3rem" }}>
          <ScrabblePiece
            letter="I"
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

        <Box sx={{ marginTop: "1.3rem" }}>
          <ScrabblePiece
            letter="H"
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
                4
              </Box>
            }
          />
        </Box>
        <Box>
          <ScrabblePiece
            letter="U"
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
        <Box sx={{ marginTop: "1.3rem" }}>
          <ScrabblePiece
            letter="B"
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
      </CardContent>
    </CardComponent>
  );
};

export default ProjectsCardComponent;
