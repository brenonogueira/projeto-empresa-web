import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import moment from "moment";
import ModalContent from '../../components/ContentModal/ModalContent'
import PrintComponent from "../../components/PrintComponent/PrintComponent";

const ModalReport = ({ modalOpen, setOpen, relatorio, setRelatorio }) => {
  const [close, setClose] = useState(true);
  console.log(close);
  console.log(relatorio);

  const closeModal = () => {
    setOpen(false);
    setRelatorio([])
  };

  // const componentRef = useRef();

  const dataAferido = moment(relatorio?.aferido).format('DD/MM/YYYY');

  return (
    <Modal
      open={modalOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ marginTop: '15px'}} 
    >
      <PrintComponent  relatorio={relatorio} setRelatorio={setRelatorio} dataAferido={dataAferido}/>
     {/* <ModalContent relatorio={relatorio} setRelatorio={setRelatorio} dataAferido={dataAferido}  /> */}
    </Modal>
  );
};

export default ModalReport;
