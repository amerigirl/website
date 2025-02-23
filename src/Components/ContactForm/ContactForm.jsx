import React from "react";
import { Box, Button, TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)(({theme}) =>{
  
})
const ContactForm = () => {
  return (
    <>
      <Box
        id="contact"
        sx={{
          display: "grid",
          gap: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
          <TextField label="Name *" variant="filled"   fullWidth  />
          <TextField label="Email *" variant="filled" fullWidth />

          <TextField
            label="Message..."
            variant="filled"
            multiline
            rows={6}
            fullWidth
          />


        <Button
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20%",
            left: "13rem",
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
