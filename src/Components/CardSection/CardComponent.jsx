import React from "react";
import { Container, styled, CardContent, Card, Typography, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const StyledCard = styled(Card)(() => ({
  backgroundColor: "white",
  transition: "background-color .03s ease",
  "&:hover": {
    backgroundColor: blueGrey[50],
  },
}));

const CardComponent = ({ children }) => {
  return (
    <Box>
      <Container>
    
        <StyledCard
          variant="outlined"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "38vh",
            width: "22.5vw",
            marginBottom: "10rem",
            borderRadius: "30px",
            border: "1px solid black",
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
    </Box>
  );
};

export default CardComponent;
