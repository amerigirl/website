import React from "react";
import { Box, Button, TextField, styled, slotProps } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const StyledTextField = styled(TextField)(({ theme }) => {});
const ContactForm = () => {
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
            width: "30%",
            left: "13rem",
            padding: "1rem",
            gap: ".5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Submit <ArrowCircleRightOutlinedIcon />
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
