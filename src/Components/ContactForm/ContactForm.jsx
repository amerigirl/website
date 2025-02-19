import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SectionTitle from "../SectionTitle";


const ContactForm = () => {
  return (
    <Box>
      <SectionTitle title="Contact Me" subtitle="Let's get in touch!" />
      <Box
        id="contact"
        sx={{
          display: "grid",
          gap: "2rem",
          maxWidth: "500px",
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
            marginBottom: "5rem",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
