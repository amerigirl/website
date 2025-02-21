import React from "react";
import { Box } from "@mui/material";
import ContactForm from "./ContactForm";
import SectionTitle from "../SectionTitle";
import ContactMeDetails from "./ContactMeDetails";

const ContactComponent = () => {
  return (
    <>
      <Box marginRight={"5rem"}>
        <SectionTitle title={"Contact Me"} subtitle={"Let's chat!"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "3rem",
          marginTop: "3rem",
        }}
      >
        <Box>
          <ContactMeDetails />
        </Box>

        <Box sx={{ width: "35%" }}>
          <Box sx={{ display: "flex" }}></Box>
          <ContactForm />
        </Box>
      </Box>
    </>
  );
};

export default ContactComponent;
