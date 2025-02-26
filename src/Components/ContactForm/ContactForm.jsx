import React from "react";
import { Box, Button, TextField } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useState } from "react";

const ContactForm = () => {
const [message, setMessage] = useState("");

const handleOnClick = () => {
  setMessage(message); 
  console.log(message);
}

  return (
    <>
      <Box
        id="contact"
        sx={{
          display: "grid",
          gap: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <TextField
          label="Name *"
          variant="filled"
          component={"div"}
          fontSize="2rem"
          fullWidth
          slotProps={{
            input: { style: { fontSize: "1.3rem" } },
            inputLabel: { style: { fontSize: "1.3rem" } },
          }}
        />
        <TextField
          label="Email *"
          variant="filled"
          fullWidth
          slotProps={{
            input: { style: { fontSize: "1.3rem" } },
            inputLabel: { style: { fontSize: "1.3rem" } },
          }}
        />

        <TextField
          label="Message..."
          variant="filled"
          multiline
          rows={6}
          fullWidth
          onClick={handleOnClick}
          slotProps={{
            input: { style: { fontSize: "1.3rem" } },
            inputLabel: { style: { fontSize: "1.3rem" } },
          }}

        />

        <Button
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "25%",
            left: "13rem",
            padding: ".8rem",
            gap: ".5rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Submit <ArrowCircleRightOutlinedIcon />
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
