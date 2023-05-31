import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';
import './cuenta.css';


export const Cuenta = () => {
  return (
    <main className="container">
      <form className="login-form">
        <Grid container spacing={2}>
          <h3>Iniciar Sesión</h3>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              type="text"
              fullWidth
              label="Email"
              sx={{ mt: 2, mb: 1.5 }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              type="password"
              fullWidth
              label="Contraseña"
              sx={{ mt: 1.5, mb: 1.5 }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              component={NavLink}
              to="../Juego"
            >
              Iniciar Sesión
            </Button>
          </Grid>
        </Grid>
      </form>
    </main>
  );
};