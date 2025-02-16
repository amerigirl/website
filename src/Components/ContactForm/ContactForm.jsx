import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        margin: "3rem 12rem",
        border: "1px solid black",
        padding: "3rem",
        borderRadius: "30px",
      }}
    >
      <Box id="contact" sx={{ textAlign: "center", marginTop:'1rem' }}>
        <Typography variant="h3">Contact Me</Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          Let's get in touch!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: "2rem",
          marginTop: "2rem",
          padding: "2rem",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginTop:"2rem"
          }}
        >
        </Box>
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
    </Box>
  );
};

export default ContactForm;
