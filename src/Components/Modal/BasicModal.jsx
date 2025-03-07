import React from "react";
import { useState, Typography, Box, Modal } from "react";

export default function BasicModal(){
  const [open, setOpen] = useState(false);

  function toggleModal() {
    setOpen((open) => !open);
  }

  return (
    <>
      <button onClick={toggleModal}>Open</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
