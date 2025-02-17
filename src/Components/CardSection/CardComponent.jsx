import React from "react";
import {
  Container,
  styled,
  CardContent,
  Card,
  Typography,
  Box,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const StyledCard = styled(Card)(({theme}) => ({
  backgroundColor: "white",
  transition: "background-color .03s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main
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
            height: "33vh",
            width: "20vw",
            marginBottom: "8rem",
            marginTop: '5rem',
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
