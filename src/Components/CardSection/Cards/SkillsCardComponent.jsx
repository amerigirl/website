import React from "react";
import CardComponent from "../CardComponent";
import { Box, CardContent } from "@mui/material";
import ScrabblePiece from "../../ScrabblePiece";

const scrabbleLetterProps = {
  height: "45px",
  width: "45px",
  padding: ".7rem",
  fontSize: "20px",
  fontWeight: "bold",
};
const SkillsCardComponent = () => {
  return (
    <CardComponent>
      <CardContent
        id="skills"
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
        </Box>

        <Box sx={{ marginTop: "1.3rem" }}>
          <ScrabblePiece
            letter="K"
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
                5
              </Box>
            }
          />
        </Box>
        <Box>
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

        <Box sx={{ marginTop: "1.3rem" }}>
          <ScrabblePiece
            letter="L"
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
            letter="L"
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

export default SkillsCardComponent;
