import React from "react";
import { Box } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const SocialMediaContact = () => {
  return (
    <>
      <Box display={"grid"} gap={"4rem"}>
        <Box>
          <EmailOutlinedIcon />
        </Box>
        <Box>
          <Box
            component="img"
            sx={{
              height: 45,
              width: 45,
            }}
            alt="LinkedIn Icon"
            src="../../LinkedIn.png"
          />
          <Box
            component="img"
            sx={{
              height: 45,
              width: 45,
            }}
            alt="Github Icon"
            src="../../github.png"
          />
        </Box>
      </Box>
    </>
  );
};

export default SocialMediaContact;
