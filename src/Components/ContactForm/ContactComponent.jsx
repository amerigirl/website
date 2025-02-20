import React from "react";
import { Box } from "@mui/material";
import ContactForm from "./ContactForm";
import SectionTitle from "../SectionTitle";
import SocialMediaContact from "./SocialMediaContact";
const ContactComponent = () => {
  return (
    <>
      <Box>
        <SectionTitle title="Contact Me" subtitle="Let's get in touch!" />
        <Box sx={{display:"flex" }}>
                  <SocialMediaContact />

        </Box>
        <ContactForm />
      </Box>
    </>
  );
};

export default ContactComponent;
