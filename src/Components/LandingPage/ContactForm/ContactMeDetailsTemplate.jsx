import React from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import theme from "../../../theme";
import propTypes from "prop-types";

const ContactMeDetailsTemplate = (props) => {
  return (
    <Box display={"grid"} gap={"2.5rem"}>
      <Box>
        <EmailOutlinedIcon sx={{ fontSize: 40, color: "primary.main" }} />
        <Typography variant="h4" component={"div"} fontSize={"1.9rem"}>
          {props.email}
        </Typography>
        <Typography
          variant="h5"
          component={"div"}
          fontSize={"1.6rem"}
          marginLeft={"4.5rem"}
          color="grey"
        >
          {props.emailText}
        </Typography>
      </Box>
    </Box>
  );
};

ContactMeDetailsTemplate.propTypes = {
  email: propTypes.string,
  emailText: propTypes.string,
};

export default ContactMeDetailsTemplate;
