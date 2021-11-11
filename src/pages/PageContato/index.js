import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
import Paper from "@mui/material/Paper";

import React from "react";

export default function index() {
  return (
    <Container maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h6" gutterBottom>
          Fale Conosco
        </Typography>
        <form>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              id="sobrenome"
              name="nome"
              label="Nome"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="sobrenome"
              name="sobrenome"
              label="Sobrenome"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
              autoComplete="email"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Mensagem"
              multiline
              fullWidth
              rows={4}
            />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
          Enviar
        </Button>
        </form>
       
      </Paper>
    </Container>
  );
}
