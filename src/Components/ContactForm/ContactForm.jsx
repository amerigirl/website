import React from "react";
import { Box, Button, TextField } from "@mui/material";

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
          <TextField label="Name *" variant="outlined" fullWidth />
          <TextField label="Email *" variant="outlined" fullWidth />

          <TextField
            label="Message..."
            variant="outlined"
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
