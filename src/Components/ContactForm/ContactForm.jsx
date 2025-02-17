import React from "react";
import { Box, Button, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <Box>
      <Box
        id="contact"
        sx={{
          display: "grid",
          gap: "2em",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        ></Box>
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
            width:"20%",
            left: "13rem",
            marginBottom: "5rem"
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
