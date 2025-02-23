import React from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const SocialMediaContact = () => {
  return (
    <>
      <Box display={"grid"} gap={"3rem"}>
        <Box>
          <Box display={"flex"} gap={"2rem"} alignItems={"center"}>
            <EmailOutlinedIcon style={{ fontSize: 40 }} />
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
            <PhoneOutlinedIcon style={{ fontSize: 40 }} />
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
            <LocationOnOutlinedIcon style={{ fontSize: 40 }} />
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

        {/* <Box>
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
        </Box> */}
      </Box>
    </>
  );
};

export default SocialMediaContact;
