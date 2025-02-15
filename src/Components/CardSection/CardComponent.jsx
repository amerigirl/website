import React from "react";
import ScrabblePiece from "./ScrabblePiece";
import { Container, styled, CardContent, Card } from "@mui/material";
import { blueGrey } from "@mui/material/colors";


const StyledCard = styled(Card)(({}) => ({
backgroundColor: 'white',
transition: 'background-color .03s ease' ,
"&:hover": {
  backgroundColor: blueGrey[50]
}
}))

const CardComponent = () => {
  return (
    <div>
      <Container>
        <StyledCard
          variant="outlined"
          sx={{
            display: "flex",
            justifyContent: "center", // Add this
            alignItems: "center", // Add this
            height: "40vh",
            width: "25vw",
            marginBottom: "15rem",
            marginTop: "3rem",
            borderRadius: "30px",
          }}
        >
          <CardContent
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrabblePiece />
          </CardContent>
        </StyledCard>
      </Container>
    </div>
  );
};

export default CardComponent;
