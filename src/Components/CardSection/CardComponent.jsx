import React from "react";
import ScrabblePiece from "./ScrabblePiece";
import { Container, Card, CardContent, Box } from "@mui/material";

const CardComponent = () => {
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          
        >
          <CardContent>
            <ScrabblePiece />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default CardComponent;
