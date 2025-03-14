import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export default function BasicModal({ open, onClose, item }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {item?.content || "Default Title"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {item?.modalContent || "Default content"}
        </Typography>
        <Typography>
          {item?.modalImage && (
            <img
              src={item.modalImage}
              alt={item.content || "Modal image"}
              style={{ maxWidth: "100%", height: "auto", marginTop: "16px" }}
            />
          )}
        </Typography>
        <Typography>
          {item?.visitSite && (
            <a
              href={item.visitSite}
              target="_blank"
              rel="noopener noreferrer"
            >
             {item?.visitTitle || "Visit Site"}
            </a>
          )}
        </Typography>
      </Box>
    </Modal>
  );}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    content: PropTypes.string,
    modalContent: PropTypes.string,
    modalImage: PropTypes.string,
    visitSite: PropTypes.string,
    visitTitle: PropTypes.string,
  }),
};
