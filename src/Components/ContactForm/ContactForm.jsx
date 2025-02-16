import React from 'react';
import { Box, Typography, Input } from '@mui/material';


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
      <Box id="contact" sx={{ textAlign: "center" }}>
        <Typography variant="h3">Contact Me</Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          Let's get in touch!
        </Typography>
      </Box>
      <Box>
        <Input placeholder="Type in here…" variant="outlined" />
        <Input placeholder="Type in here…" variant="solid" />
        <Input placeholder="Type in here…" variant="solid" />
        <Input placeholder="Type in here…" variant="solid" />
      </Box>
    </Box>
  );
}

export default ContactForm
