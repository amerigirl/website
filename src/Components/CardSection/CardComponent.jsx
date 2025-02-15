import React from "react";
import ScrabblePiece from "../ScrabblePiece";
import { Container, styled, CardContent, Card } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const StyledCard = styled(Card)(({}) => ({
  backgroundColor: "white",
  transition: "background-color .03s ease",
  "&:hover": {
    backgroundColor: blueGrey[50],
  },
}));

const CardComponent = ({ children }) => {
  return (
    <div>
      <Container>
        <StyledCard
          variant="outlined"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "38vh",
            width: "23vw",
            marginBottom: "20rem",
            borderRadius: "30px",
            border: "1px solid black"
          }}
        >
          <CardContent
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </CardContent>
        </StyledCard>
      </Container>
    </div>
  );
};

export default CardComponent;
