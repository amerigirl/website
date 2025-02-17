import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <Box>
      <Box
        id="contact"
        sx={{
          display: "grid",
          gap: "2rem",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
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
      </Box>
      <Button
        variant="outlined"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
