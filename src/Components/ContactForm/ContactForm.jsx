import React from 'react';
import { Box, Typography } from '@mui/material';


const ContactForm = () => {
  return (
   <Box sx={{marginBottom: '8rem'}}>
    <Box id="contact" sx={{textAlign: 'center'}}>
        <Typography variant='h3'>Contact Me</Typography>
        <Typography variant='h6' sx={{color: 'primary.main'}}>Let's get in touch!</Typography>
    </Box>
   </Box>
  )
}

export default ContactForm
