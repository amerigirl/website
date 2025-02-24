import React from "react";
import { Box, Button, CardContent } from "@mui/material";
import CardComponent from "../CardComponent";
import ScrabblePiece from "../../ScrabblePiece";
import { blueGrey } from "@mui/material/colors";


const scrabbleLetterProps = {
  height: "45px",
  width: "45px",
  padding: ".7rem",
  fontSize: "20px",
  fontWeight: "bold",
 
};

const AboutCardComponent = () => {
  return (
    <Box component={Button} href="http://localhost:3000/aboutPage">
      <CardComponent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: ".3rem",
            padding: "1rem",
          }}
        >
          <Box>
            <Box>
              <ScrabblePiece
                letter="A"
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
          <Box>
            <ScrabblePiece
              letter="O"
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
        </CardContent>
      </CardComponent>
    </Box>
  );
};
export default AboutCardComponent;
