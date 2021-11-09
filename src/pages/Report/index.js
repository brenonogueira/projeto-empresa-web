import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import axios from "axios";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const close = false;

  const getRelatorio = () => {
    axios
      .get("https://apibetontech.ddns.net:3333/v1/cliente/relatorio/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-token": token,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="sm">
        <h1>Relatório</h1>
        <br />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Insira o token"
          variant="outlined"
          onChange={(e) => setToken(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "15px",
          }}
        >
          <Button
            onClick={() => {
              getRelatorio();
            }}
            variant="contained"
          >
            Visualizar
          </Button>
        </div>
        <Modal modalOpen={open} setOpen={setOpen} />
      </Container>
    </>
  );
}
