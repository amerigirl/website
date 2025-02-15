import React from "react";
import ScrabblePiece from "./ScrabblePiece";
import { Container, styled, CardContent, Card } from "@mui/material";
import theme from '../../App.js'
import { grey } from "@mui/material/colors";


const StyledCard = styled(Card)(({ theme }) => ({
backgroundColor: 'white',
transition: 'background-color .03s ease' ,
"&:hover": {
  backgroundColor: grey[100]
}
}))

const CardComponent = () => {
  return (
    <div>
      <Container> 

        <StyledCard
          variant="outlined"
          sx={{
            height: "40vh",
            width: "25vw",
            marginBottom: "15rem",
            marginTop: "3rem",
            borderRadius: "30px",
          }}
        >
          <CardContent>
            <ScrabblePiece />
          </CardContent>
        </StyledCard>
      </Container>
    </div>
  );
};

export default CardComponent;
