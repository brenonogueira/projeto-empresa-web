import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ModalReport = (props) => {
  const [close, setClose] = useState(true);
  console.log(close);

  const closeModal = () => {
    props.setOpen(false);
  };

  return (
    <Modal
      open={props.modalOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          backgroundColor: "#FFF",
          width: "300px",
          height: "200px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button onClick={closeModal} variant="contained">
          Visualizar
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalReport;
