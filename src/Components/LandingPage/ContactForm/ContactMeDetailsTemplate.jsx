import React from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import theme from "../../../theme";
import propTypes from "prop-types";
import ContactMeDetailsTemplateData from "../../../Data/ContactMeDetailsTemplateData";

const ContactMeDetailsTemplate = ({ info }) => {
  return (
    <Box marginBottom={"2rem"}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        {info.icon}
        <Typography variant="h4" component={"div"} fontSize={"1.9rem"}>
          {info.iconText}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          component={"div"}
          fontSize={"1.6rem"}
          marginLeft={"3.5rem"}
          color="grey"
        >
          {info.iconSubLine}
        </Typography>
      </Box>
    </Box>
  );
};

{
}

ContactMeDetailsTemplate.propTypes = {
  info: propTypes.object,
  email: propTypes.string,
  emailText: propTypes.string,
};

export default ContactMeDetailsTemplate;
