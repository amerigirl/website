import React from "react";
import ScrabblePiece from "../../Components/ScrabblePiece";
import { Container, Card, CardContent, Box } from "@mui/material";

const SkillsCard = () => {
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          sx={{
            height: "40vh",
            width: "25vw",
            marginBottom: "10rem",
          }}
        >
          <CardContent>
            <ScrabblePiece />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default SkillsCard;
