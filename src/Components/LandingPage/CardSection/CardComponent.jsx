import React from "react";
import {
  Container,
  styled,
  CardContent,
  Card,

  Box,
} from "@mui/material";
  

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.tertiary.main,
  transition: "background-color .03s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

// eslint-disable-next-line react/prop-types
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
            height: "33vh",
            width: "23vw",
            marginBottom: "6rem",
            marginTop: "2rem",
            borderRadius: "30px",
            border: "2px solid teal",
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
