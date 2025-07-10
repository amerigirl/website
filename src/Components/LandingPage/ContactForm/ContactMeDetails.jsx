import React from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import theme from "../../../theme";

const SocialMediaContact = () => {
  return (
    <>
      <Box display={"grid"} gap={"2.5rem"}>
        <Box>
          <Box display={"flex"} gap={"2rem"} alignItems={"center"}>
            <EmailOutlinedIcon sx={{ fontSize: 40, color: "primary.main" }} />
            <Typography variant="h4" component={"div"} fontSize={"2rem"}>
              Email
            </Typography>
          </Box>
          <Typography
            variant="h5"
            component={"div"}
            fontSize={"1.7rem"}
            marginLeft={"4.5rem"}
            color="grey"
          >
            amerigirl29@gmail.com
          </Typography>
        </Box>

        <Box>
          <Box display={"flex"} gap={"2rem"} alignItems={"center"}>
            <PhoneOutlinedIcon sx={{ fontSize: 40, color: "primary.main" }} />
            <Typography variant="h4" component={"div"} fontSize={"2rem"}>
              Phone
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              component={"div"}
              fontSize={"1.7rem"}
              marginLeft={"4.5rem"}
              color="grey"
            >
              1-816-718-8050
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box display={"flex"} gap={"2rem"} alignItems={"center"}>
            <LocationOnOutlinedIcon
              sx={{ fontSize: 40, color: "primary.main" }}
            />
            <Typography variant="h4" component={"div"} fontSize={"2rem"}>
              Location
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              component={"div"}
              fontSize={"1.7rem"}
              marginLeft={"4.5rem"}
              color="grey"
            >
              Seattle, WA
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          gap="2rem"
          alignItems="center"
          marginTop="1rem"
          marginLeft="12rem"
        >
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
        </Box>
      </Box>
    </>
  );
};

export default SocialMediaContact;
