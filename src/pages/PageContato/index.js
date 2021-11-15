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
            <Grid item xs={12} sm={12}>
              <h1>Telefone : (69) 3219-1142</h1>
            </Grid>

            <Grid item xs={12} sm={12}>
              <h1>E-mail : contato@betontech.com.br</h1>
            </Grid>

            <Grid item xs={12} sm={12}>
              <h1>Endereço : Rua Rio Candeias, 4171 B - Nova Esperança<br />
                  Porto Velho - RO</h1>
            </Grid>

            <Grid item xs={12} sm={2}>
              <a href="https://www.facebook.com/betontech.com.br" class=" inline-block mr-6 text-2xl text-black duration-300 hover:text-theme-color-2">
                <i class="lni lni-facebook-filled"></i>
              </a>
            </Grid>

            <Grid item xs={12} sm={2}>
              <a href="https://www.linkedin.com/company/betontech-tecnologia-de-concreto-ltda/about/" class=" inline-block mr-6 text-2xl text-black duration-300 hover:text-theme-color-2">
                <i class="lni lni-linkedin-original"></i>
              </a>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
