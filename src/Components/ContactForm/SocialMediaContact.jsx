import React from 'react';
import { Box } from '@mui/material';


const SocialMediaContact = () => {
  return (
    <Box display={"flex"} 
    >
      <Box
        component="img"
        sx={{
          height: 52,
          width: 52,
        }}
        alt="LinkedIn Icon"
        src="../../LinkedIn.png"
      />
      <Box
        component="img"
        sx={{
          height: 38,
          width: 38,
          marginTop: 0.7,
        }}
        alt="Github Icon"
        src="../../github.png"
      />
    </Box>
  );
}

export default SocialMediaContact
