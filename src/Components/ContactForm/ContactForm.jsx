import React from "react";
import { Box, Button, TextField } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useState } from "react";

const ContactForm = () => {
const [formData, setFormData] = useState({
  //set all of the form data at once in state to an empty string
  name: "", 
  eamil:"",
  message: ""
});



const handleInput = (e) =>{
  const {name, value} = e.target;
  
  setFormData((prevData)=> {
    return {

      ...prevData, //keep the old state
      [name]:value 

    }
  })
}
const handleSubmit = (e) => {
  e.preventDefault();  
  console.log("Form submitted:", formData);
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
          name="Name *"
          value={formData.name}
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
          name="Email *"
          variant="filled"
          fullWidth
          value={formData.email}
          slotProps={{
            input: { style: { fontSize: "1.3rem" } },
            inputLabel: { style: { fontSize: "1.3rem" } },
          }}
        />

        <TextField
          name="Message..."
          label="Message..." //is this necessary now that we have name??
          variant="filled"
          multiline
          rows={6}
          onChange={(e) => handleInput(e)}
          value={formData.message}
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
            width: "25%",
            left: "13rem",
            padding: ".8rem",
            gap: ".5rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          onClick={() => handleSubmit()}
        >
          Submit <ArrowCircleRightOutlinedIcon />
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
