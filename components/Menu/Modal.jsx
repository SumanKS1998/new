import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 5,
};

export default function BasicModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Menu Item
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            980
          </Typography>
          <Button
            className="add-btn"
            sx={{ mx: "auto !important", display: "block" }}
            onClick={handleClose}
          >
            Okay
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
