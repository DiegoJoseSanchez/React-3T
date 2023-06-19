import './ranking.css';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ICategoria } from '../firebase/categorias';
import { getCategorias, newCategoria } from '../firebase/firecategorias';

const Ranking = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  useEffect(() => {
    getCategorias().then((res) => {
      const sortedCategorias = [...res]
      .sort((a, b) => b.ap - a.ap); // Ordenar por personaje.ap en orden descendente
      setCategorias(sortedCategorias);
    });
  }, []);
  

  return (
    <>
      <main className='back'>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <TableContainer component={Paper} id='tabla'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: "white" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Nick</TableCell>
                  <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Class</TableCell>
                  <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Country</TableCell>
                  <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Guild</TableCell>
                  <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Honor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categorias.map((personaje: ICategoria) => (
                  <TableRow
                    key={personaje.codigo}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{personaje.name}</TableCell>
                    <TableCell align="center">{personaje.class}</TableCell>
                    <TableCell align="center">{personaje.country}</TableCell>
                    <TableCell align="center">{personaje.guild}</TableCell>
                    <TableCell align="center">{personaje.ap}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </main>
    </>
  );
};

export default Ranking;
