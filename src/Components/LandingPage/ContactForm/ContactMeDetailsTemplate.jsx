import React from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import theme from "../../../theme";

const ContactMeDetailsTemplate = (props) => {
  return (
    <Box display={"grid"} gap={"2.5rem"}>
      <Box>
        <EmailOutlinedIcon sx={{ fontSize: 40, color: "primary.main" }} />
        <Typography variant="h4" component={"div"} fontSize={"1.9rem"}>
          {}
        </Typography>
        <Typography
          variant="h5"
          component={"div"}
          fontSize={"1.6rem"}
          marginLeft={"4.5rem"}
          color="grey"
        >
          {}
        </Typography>
      </Box>
    </Box>
  );
};
export default ContactMeDetailsTemplate;
