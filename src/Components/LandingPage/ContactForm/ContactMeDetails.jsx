import React from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import theme from "../../../theme";
import ContactMeDetailsTemplate from "./ContactMeDetailsTemplate";


const SocialMediaContact = () => {
  return (
    <>
      <ContactMeDetailsTemplate  />

      <a
        href="https://www.linkedin.com/in/be-asia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          component="img"
          sx={{
            height: 70,
            width: 70,
          }}
          alt="LinkedIn Icon"
          src="../../linkedInLogo.jpg"
        />
      </a>
      <a
        href="https://github.com/amerigirl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          component="img"
          sx={{
            height: 45,
            width: 45,
          }}
          alt="Github Icon"
          src="../../github.png"
        />
      </a>
    </>
  );
};

export default SocialMediaContact;
